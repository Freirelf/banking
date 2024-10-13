import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/banks.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  if(!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox 
        title="Transferência de Pagamento"
        subtext="Por favor, forneça quaisquer detalhes ou notas específicas relacionadas à transferência de pagamento."
      />

      <section className="size-full pt-5">
        <PaymentTransferForm 
          accounts={accountsData}
        />
      </section>
    </section>
  )
}

export default Transfer