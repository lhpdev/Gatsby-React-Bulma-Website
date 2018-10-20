import React from 'react'

import '../Components/layout.css'
import '../Components/medias.css'

import QuestionCard from '../Components/Faq/question_card';
import Layout from '../Components/Layout/layout'

const FaqPage = () => (
  <Layout>
    <section className="section faqpage-section start-section">
      <h1 className="title"> Frequently asked questions </h1>
      <h3 className="title is-4">Connecting your bank</h3>
      <QuestionCard 
      question={"Does Even need to connect with my bank?"} 
      answer={
      <div>
        <p>
        No, but your bank information powers the Spend section of the Even app where you can:
        </p>
        <br />
        <ul>
          <li>• See all your transactions together in one place</li>
          <li>• Plan for upcoming bills, automatically</li>
          <li>• And always know what’s okay to spend</li>
        </ul>
      </div>
      }
      />

      <QuestionCard 
      question={"Can I trust Even with my bank information?"} 
      answer={
      <div>
        <p>
        Yes. Even holds an A rating with the Better Business 
        Bureau and has passed strict security and privacy compliance audits.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Can Even take my money?"} 
      answer={
      <div>
        <p>
        No. Connecting your bank account does not authorize Even to withdraw from your account. 
        Connecting only authorizes Even to privately and securely track money going in and out of 
        your account.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"I have several bank accounts. Which should I connect?"} 
      answer={
      <div>
        <p>
        You should connect the checking account where your paycheck gets direct deposited. If your pay 
        is deposited into multiple accounts, connect the account that receives the largest deposits. 
        You can connect additional bank accounts, but it is important to connect your primary account.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"I share a bank account with someone else. Can I still use Even?"} 
      answer={
      <div>
        <p>
        Probably—it depends on a few factors. You may need help from one of the friendly Even 
        Advisors while you’re setting up your account. Just tap the in-app chat button and they’ll 
        help you out.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Why can’t I find my bank?"} 
      answer={
      <div>
        <p>
        Despite Even’s best efforts to work with all banks, some banks’ online technology isn’t 
        modern enough to be compatible with the app. If you don’t see your bank, you can tap the 
        "Continue without a bank" button at the bottom of the search results and access the rest
        of the Even app. Also, feel free to chat an Advisor with your bank’s name and they will 
        do their best to resolve the issue.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"What if I want to delete my information from Even’s system?"} 
      answer={
        <div>
          <p>
            Head to the “Settings” section of the app, and select “Delete account and data.”
          </p>
        </div>
      }
      />

      <QuestionCard 
      question={"What if there’s an issue with my bank connection?"} 
      answer={
      <div>
        <p>
        For bank account connection issues, try the "Refresh bank connection" button accessible
        from the button in the top-right corner of the Spend section. If you still experience issues, 
        contact an Advisor via in-app chat.
        </p>
      </div>
      }
      />


      <h3 className="title is-4">Security & Privacy</h3>


      <QuestionCard 
      question={"Is Even’s system secure?"} 
      answer={
      <div>
        <p>
        Yes. Your connection to and from Even is secured using 256-bit end-to-end encryption. 
        Even’s systems have been audited for security and compliance and regularly undergo security 
        and privacy audits by some of the nation’s largest employers.
        </p>
      </div>
      }
      />


      <QuestionCard 
      question={"Will Even sell my information?"} 
      answer={
      <div>
        <p>
        No, Even will never sell your information or data you provide. You can read more about 
        this in Even’s privacy policy.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Why does Even ask for my phone number?"} 
      answer={
      <div>
        <p>
        Even uses your phone number to create and secure your account.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"What if I lose my phone?"} 
      answer={
      <div>
        <p>
        Email support@teameven.com with your phone number and Even will immediately
        disable access to your account.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"What if I change my phone number?"} 
      answer={
      <div>
        <p>
        Email support@teameven.com with your old phone number and Even will update your account.
        </p>
      </div>
      }
      />


      <h3 className="title is-4">"Okay to spend"</h3>
      <QuestionCard 
      question={"What’s the difference between my bank balance and the “Okay to spend” amount Even shows me?"} 
      answer={
      <div>
        <p>
        Your “Okay to spend” amount is your bank balance, minus the money you can’t spend: money you need for
        bills and emergency expenses.
        </p>
      </div>
      }
      />
      <QuestionCard 
      question={"Is my “Okay to spend” balance up to date?"} 
      answer={
      <div>
        <p>
        Even updates your balance 3 times a day: once in the morning, once around midday, and once in the evening.
        </p>
      </div>
      }
      />

      <h3 className="title is-4">"Planning ahead"</h3>

      <QuestionCard 
      question={"What’s the difference between Even planning my bills and me planning them myself?"} 
      answer={
      <div>
        <p>
        Even spreads your bills evenly across your paychecks, pulling just the right amount of money from each check 
        for each bill.
        <br />
        For example, if most of your bills are due in the second half of the month, Even will hold aside enough money from your 
        first paycheck of the month so you don’t have to use your whole second paycheck for bills. This leaves you with a more 
        consistent amount of money left to spend after every paycheck.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How does Even know what bills to budget for?"} 
      answer={
      <div>
        <p>
        Even knows what bills to budget for because it automatically identifies them from past transactions in your bank 
        account. Of course, you can also add bills yourself.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Even didn’t find a bill I pay. Why?"} 
      answer={
      <div>
        <p>
        Most likely because you pay the bill in a way that the app can’t track, like paying by cash or money order.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Does Even pay the bills for me?"} 
      answer={
      <div>
        <p>
        No, you still must pay the bills yourself for now.
        </p>
      </div>
      }
      />

      <h3 className="title is-4">Instapay</h3>

      <QuestionCard 
      question={"What is Instapay?"} 
      answer={
      <div>
        <p>
        Instapay is an Even Plus feature that gives you access to wages you’ve earned, 
        but haven’t yet been paid. Even Plus and Instapay are only available to certain employers that we’ve partnered with.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Who can use Instapay?"} 
      answer={
      <div>
        <p>
        If you work at employers who have partnered with Even, then you can use Instapay.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How does Instapay work?"} 
      answer={
      <div>
        <p>
        Even works with your employer’s payroll and timesheet systems to see how much of your unpaid wages are 
        available to access. You tell us how much of your available already-earned wages you need, and Even sends
        them to you.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Will Instapay let me receive my full paycheck earlier than usual?"} 
      answer={
      <div>
        <p>
        With Instapay, you can access up to 50% of your net pay before payday. Instapay does not allow you to receive
        your full paycheck ahead of schedule.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Where does Even send the money?"} 
      answer={
      <div>
        <p>
        Even sends money to the bank account for which you provide account and routing numbers. It’s best to provide
        account and routing numbers for your paycheck direct deposit account.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How much money can I get?"} 
      answer={
      <div>
        <p>
        It depends on how much you’ve worked. You can always see the exact amount available to you in the 
        Instapay section of the app.
        <br />
        Instapay is limited to 50% of the net pay you’ve earned at that point in time. Net pay is 
        the amount you earn after taxes and other deductions
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Why is my Instapay use limited?"} 
      answer={
      <div>
        <p>
        Instapay use is limited to help manage cash flow. Instapay is limited to a specific percentage of your paycheck to 
        ensure that you have enough funds available throughout your next paycheck cycle. Using Instapay multiple times per
        pay cycle could leave you unprepared for large expenses, like rent or utility bills.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Is Instapay tax-free?"} 
      answer={
      <div>
        <p>
        Instapay is based on your post-tax income. There is no need to file additional forms (such as 1099s) for any 
        Instapays you receive.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How long does it take to get money?"} 
      answer={
      <div>
        <p>
        It takes one business day for your bank to make Instapay funds available to you.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Are there any additional fees or interest?"} 
      answer={
      <div>
        <p>
        INo. There are no fees or charges besides the Even Plus Fee.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How is Instapay different from credit cards or a loan?"} 
      answer={
      <div>
        <p>
        Instapay allows you to access wages that you’ve already earned, without needing to pay any interest. It’s not borrowing; it’s your money.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How do I settle up my balance after an Instapay?"} 
      answer={
      <div>
        <p>
        After you receive an Instapay, one of two things will happen: either a deduction will come out of your next paycheck
        for the amount of the Instapay OR your connected bank account will be debited for that amount on your next payday.
        <br />
        Deductions from bank accounts only occur when an Instapay request is made too close to a payday to be processed directly through your paycheck.
        <br />
        The “Instapay” section of the app will clearly show where the deduction will come from before you submit an Instapay reques
        </p>
      </div>
      }
      />

      
      <h3 className="title is-4">Subscription cost</h3>
      <QuestionCard 
      question={"How and when will my subscription be charged?"} 
      answer={
      <div>
        <p>
        You’ll be billed via your connected bank account. You can see the date of the next charge by going to the “Membership” 
        section of the app.
        </p>
      </div>
      }
      />

      <h3 className="title is-4">Even Basic</h3>
      <QuestionCard 
      question={"What’s included in an Even Basic subscription?"} 
      answer={
      <div>
        <p>
        Subscriptions include unlimited access to Even’s financial planning services. These services help you organize your money
        automatically by keeping track of how much you can safely spend after paying bills.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How much does an Even Basic subscription cost?"} 
      answer={
      <div>
        <p>
        Basic subscriptions cost $2/month. You’ll be billed via your connected bank account. You can see the date of the next
        subscription charge by going to the “Membership” section of the app.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How do I cancel my Even Basic subscription?"} 
      answer={
      <div>
        <p>
        You can cancel your subscription by going to the “Membership” section of the app and selecting “Cancel membership.”
        </p>
      </div>
      }
      />
      <h3 className="title is-4">Even advisors</h3>

      <QuestionCard 
      question={"Who are the Even Advisors?"} 
      answer={
      <div>
        <p>
        They’re Even employees who provide support for Even members through in-app chat.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"Are they real people?"} 
      answer={
      <div>
        <p>
        Yes, they are real—not robots! They work at the Even headquarters in Oakland, California.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"What kinds of things can an Even Advisor help me with?"} 
      answer={
      <div>
        <p>
        They can help you get started, answer questions, or assist you with anything you’re not able to do on your own through 
        the app, such as letting Even know if you lost your job.
        <br /> 
        Anytime you need something and aren’t sure what to do, just ask them.
        </p>
      </div>
      }
      />

      <QuestionCard 
      question={"How do I get help from an Even Advisor?"} 
      answer={
      <div>
        <p>
        Just tap "Get help" in the main menu and type a message to them. They’ll respond quickly and help you out..
        </p>
      </div>
      }
      />
      <QuestionCard 
      question={"Is there any charge for getting help from an Even Advisor?"} 
      answer={
      <div>
        <p>
        Nope, you can message them anytime for free!
        </p>
      </div>
      }
      />
      <QuestionCard 
      question={"During what hours are Even Advisors available?"} 
      answer={
      <div>
        <p>
        Advisors are available Monday through Friday from 6:00 am - 7:00 pm Pacific Time, and Saturday - Sunday 7:00 am - 5:00 pm Pacific Time.
        </p>
      </div>
      }
      />
      <h3 className="title is-4">Even, the company</h3>
      <QuestionCard 
      question={"When was Even founded?"} 
      answer={
      <div>
        <p>
        Even was founded in fall 2014 and started serving the first Even members in spring 2015.
        </p>
      </div>
      }
      />
      <QuestionCard 
      question={"Where are the Even offices?"} 
      answer={
      <div>
        <p>
        Even’s headquarters are in Oakland, California. It also has offices in Raleigh, North Carolina and New York City.
        </p>
      </div>
      }
      />
      <QuestionCard 
      question={"How does Even make money?"} 
      answer={
      <div>
        <p>
        Even makes money from subscription fees and partnerships. That’s it.
        </p>
      </div>
      }
      />
      <QuestionCard 
      question={"Where else can I read about Even?"} 
      answer={
      <div>
        <p>
        The New York Times, Forbes, Newsweek, Fast Company, and many other publications have written about Even.
        </p>
      </div>
      }
      />
      <QuestionCard 
      question={"Where can I go for more answers?"} 
      answer={
      <div>
        <p>
        You can use the “Get Help” section of the Even app to chat with an Advisor. To report an app bug, please reach 
        out to an Advisor or share a screenshot of the issue by shaking your phone when the Even app is open.
        </p>
      </div>
      }
      />
    </section>
  </Layout>
)

export default FaqPage
