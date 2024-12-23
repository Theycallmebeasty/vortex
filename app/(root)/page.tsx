import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'


const Home = () => {
  const loggedIn = {firstName: 'BSTY', lastName: 'WorldWide', email: 'bstyworldwide@gmail.com'};


  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your accout and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>
      </div>
      <RightSidebar
         user={loggedIn}
         transactions={[]}
          banks={[{ currentBalance: 1253.0}, {currentBalance: 500.0}]}
      />
    </section>
  )
}

export default Home