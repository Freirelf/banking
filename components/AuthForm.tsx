"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import { CustomInput } from "./CustomInput";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import PlaidLink from "./PlaidLink";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log('Form data:', data)
    setIsLoading(true);

    try {
        if (type === "sign-up") {
          const userData = {
            firstName: data.firstName!,
            lastName: data.lastName!,
            address1: data.address1!,
            city: data.city!,
            state: data.state!,
            postalCode: data.postalCode!,
            dateOfBirth: data.dateOfBirth!,
            ssn: data.ssn!,
            email: data.email,
            password: data.password,
          }

          const newUser = await signUp(userData);

          console.log("Novo usuário:", newUser);
          setUser(newUser);
        }

        if (type === "sign-in") {
            const response = await signIn({
                email: data.email,
                password: data.password
            });
            if(response) router.push("/");
        }
        
    } catch (error) {
      console.log('Erro no onSubmit:', error);
    } finally {
        setIsLoading(false);
    }

  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            src="/icons/logoo.svg"
            width={34}
            height={34}
            alt="Grow logo"
            className="size=[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Grow{" "}
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Vincular Conta" : type === "sign-in" ? "Entrar" : "Cadastre-se"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Vincule sua conta para começar."
                : "Por favor, insira seus dados."}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {
              type === "sign-up" && (
                <>
                    <div className="flex gap-4">
                        <CustomInput
                            control={form.control}
                            name="firstName"
                            label="Nome"
                            placeholder="Ex: João"
                        />

                        <CustomInput
                            control={form.control}
                            name="lastName"
                            label="Sobrenome"
                            placeholder="Ex: Silva"
                        />
                    </div>

                    <CustomInput
                        control={form.control}
                        name="address1"
                        label="Endereço"
                        placeholder="Digite seu endereço completo "
                    />

                    <CustomInput
                        control={form.control}
                        name="city"
                        label="Cidade"
                        placeholder="Digite sua cidade "
                    />

                    <div className="flex gap-4">
                        <CustomInput
                            control={form.control}
                            name="state"
                            label="Estado"
                            placeholder="Ex: CE"
                        />

                        <CustomInput
                            control={form.control}
                            name="postalCode"
                            label="CEP"
                            placeholder="Ex: 99999-999"
                        />
                    </div>
                    
                    <div className="flex gap-4">
                        <CustomInput
                            control={form.control}
                            name="dateOfBirth"
                            label="Data de nascimento"
                            placeholder="dd-mm-aaaa"
                        />

                        <CustomInput
                            control={form.control}
                            name="ssn"
                            label="CPF"
                            placeholder="000-000-000-00"
                        />
                    </div>
              </>
            )}
            
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Digite seu email"
            />

            <CustomInput
              control={form.control}
              name="password"
              label="Senha"
              placeholder="Digite sua senha"
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                  <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Carregando...
                  </>
                  ): type === "sign-in" ? "Entrar" : "Cadastrar"}
              </Button>
            </div>
          </form>
          </Form>
          <footer className="flex justify-center gap-1">
                <p className="text-14 font-normal text-gray-600">
                    {type === "sign-in" ? "Não possui uma conta?" : "Já possui uma conta?"}
                </p>
                <Link 
                    href={type === "sign-in" ? "/sign-up" : "/sign-in"} 
                    className="form-link"
                >
                    {type === "sign-in" ? "Cadastre-se" : "Entrar"}
                </Link>
          </footer>
        </>
      )} 
      
    </section>
  );
};

export default AuthForm;

