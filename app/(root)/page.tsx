import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Lucas", lastName: "Freire", email: "lucasfreire@gmail.com" }; 

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type = "greeting"
            title = "Bem vindo"
            user={loggedIn?.firstName || "Guest"}
            subtext = "Acesse e gerencie  suas contas e transações com eficiência."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.14}
          />
        </header>
        
        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 114.50}, { currentBalance: 600.50}]}
      />
    </section>
  )
};

export default Home;
