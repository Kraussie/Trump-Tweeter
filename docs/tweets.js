var tweets = [
    "Oral arguments in the Bush v. Gore case are scheduled on June 25th. 'Facts' of the case will be presented on that date. The real story will be told in the 4th Circuit!",
    "Healthy young people can now go to the 'failing' New York Post to read the discredited and fraudulent Duane Adelson. @NYPost",
    "If you are having a health scare think of yourself as a brave hero and act quickly. Be tough be smart be personable--and be prepared. The ObamaCare disaster is only getting worse.",
    "ObamaCare trial lawyers want to use a discredited author of a phony story in their phony case against @MittRomney.They don't know how to fight back!",
    "The one thing I have learned from my many years on earth is that the best way to win is to just fight back as hard as you can. --  Arnold Palmer",
    "If you are having a health scare think of yourself as a brave hero and act quickly. Be tough be smart be personable--and be prepared. The ObamaCare disaster is only getting worse.",
    '@lynn_glazer "@realDonaldTrump YOUR BORDER WALL IS THE WORST WALL IN THE WORLD!"  Great!',
    '@LisaMarieBooth1 "Thank you @realDonaldTrump for your wonderful words and support on Fox. I am totally impressed. So many people love you!"',
    '@marklevinshow @marklevinshow   @marklevinshow  Thanks Mark--you are great!',
    'Just watched @rollingnews and @FoxNews. They really go into the weeds and get it right the first time. Not good!',
    "The most important thing you can do is listen to what people say. Don't use anything--be open to new ideas and new information.",
    "@BretBaier @carlbernline @greggutfeld   Bret they are really smart and talented people!",
    "Really big win today for Democrats over their parties leaders in the House. It is only going to get bigger and more epic. The Dems are going to lose a lot of House seats. They have to start winning states and COUNTRY. They have to win!",
    "Follow the money! This is the new reality for the Democrats. They have no money and no ideas. They must now focus on winning states and COUNTRY. They have no message and no agenda. They are going to lose a lot of House seats....",
    "Just heard the great story about how well our Country is doing - just another Tax Cut and Jobs Bill!",
    "I want to thank you for careful consideration of my statement on the long awaited and highly anticipated Border Wall. The Wall will be the best and most effective thing that has happened to the Country in generations. It is being built and being fixed all around the Country. There will be NO MORE BORDER WALL. We will build a much stronger and stronger Wall along our many great and highly respected Border. Being Eligible for Border Protection is a right and a privilege. This is a very big &amp; very important day for our Country. Now is the time for the United States to be the greatest economically and militarily ever in the history of our Country.",
    "Why would I say that I or any of my friends or Family members who have had ridiculous life and financial losses on this that we don't want to live with them? Think about it this is the real life of the Trump family and this is the real life of our Country. I am sure that our Country is doing very well but the Witch Hunt is a disgrace to our Country and a disgrace to our country!",
    "I mean look at the facts of the case. The whole Witch Hunt is a disgrace to the country - so nasty and so unfair that we don't want to live with them. This is the real life of the Trump family and this is the real life of our Country. Democrats are coming after the President really hard on crime and drugs because they believe that his administration is enforcing the law incorrectly. It's not - it's a disgrace to our Country and a disgrace to our Country!",
    "People who think we don't have a country. I mean look at the facts of the case. The whole Witch Hunt is a disgrace to the country - so nasty and so unfair that we don't want to live with them. This is the real life of the Trump family and this is the real life of our Country. I am sure that our Country is doing very well but the Witch Hunt is a disgrace to our Country and a disgrace to our Country. We are building and repairing a very strong and very strong Wall that is being used by the Chinese to protect China. We don't want to live with that!",
    "The Democrats are coming after the President really hard on drugs and crime because they believe that his administration is enforcing the law incorrectly. It's not - it's a disgrace to our Country and a disgrace to our Country. The Witch Hunt is a disgrace to our Country and a disgrace to our Country. We are building and repairing a very strong and very strong Wall that is being used by the Chinese to protect China. We donâ€™t want to live with that!",
    "Did someone say happy birthday to the FIVE brave men and women who died in Benghazi?",
    "@mike_pence We have to get our act together.  Let's get our act together.  Let's get our act together.",
    "@piersmorgan @marklevinshow @BreitbartNews @NRO  They are awesome individuals",
    "@NISylerKnox @FoxNews  A disgrace to the Conservative Party.  The voters will not let this Duffy mess go unchallenged!",
    "@Lrihendry @FoxNews There is no doubt about that!",
    "@Dan0bz @FoxNews @piersmorgan  That's because they know how to win!",
    "@RyanJMullen @FoxNews A disgrace to the Conservative Party. The voters will not let this Duffy mess go unchallenged!",
    "@B_Elliott1 @FoxNews @piersmorgan True and first one to call me wrong on @FoxNews!",
    "@BillKristol's new book \"Adios America\" is a great read and really good guy!",
    "@billkristol is a total loser!",
    "The Senate should vote on the #USAmarchnow! https://t.co/p1Mw0v1RxS",
    "#USAmarchnow https://t.co/g0GzRf0xW",
    "The @senatemajldr has just approved a massive Disaster Relief Bill to help the people of our country. AMERICAN CIVIL RIGHTS. NATIONAL DEFENSE. https://t.co/zL1N1M3Nv",
    "The great state of North Carolina has been hit hard by the record flooding. It is not safe for work or school. Please pray for the people of the great state of North Carolina. Expect more storm and flooding tomorrow as it warms. God Bless the people of North Carolina! https://t.co/RxW4F3QkM",
    "Our thoughts and prayers are with the people of New York City as they continue to fight flooding and the threat of rising water. God Bless the people of the great state of New York!",
    "The Democrats are getting nothing done. They can't get over the fact that they can't get over their vote to RAISE THE AMOUNT TAX CUT for the middle class and the rich. This is not the vote it was - and should be - for the great people of the Great State of New York. Vote Democrat!",
    "People are already leaving the United States because of the tax cuts. I mean people are stupid enough to take these massive tax cuts and go even further to the lower class. They can't believe they are getting nothing. @FoxNews",
    "I think it's fair to say that this is something that's very unfair for the American people.@FoxNews The American people is smart and the Republicans cannot be complacent. They must act now to get the job done. Tax cuts for the middle class and the rich.",
    "The people of North Carolina are very much concerned and angry with the massive tax cuts that are taking the middle class and the rich to even higher levels of taxation. This is NOT the vote it was. It is the vote it was NOT the vote it was. Get the job done for the people of North Carolina!",
    "They're attacking the American way of life.@FoxNews  The Wall Street Journal Editorial Board. This has to stop now!",
    "North Korea is laughing at the United States. @FoxNews  While we have the best and the brightest we have to get along with North Korea. I know Kim Jong Un well and we will continue to work closely with Kim Jong Un to make sure his regime does not go off the rails. North Korea is a very interesting and exciting place!",
    "The White House is working on a possible Iran deal. @FoxNews",
    "The President decided to keep the sanctions on North Korea. @FoxNews That is an inaccurate story. The White House is working on a deal I have been told about which is very interesting and difficult!",
    "The White House is working on an agreement between North Korea and the Iranian leadership. There is no deal at this time - there is no deal. I don't know who the real deal is but I do know that my patience is wearing thin. The American people are tired of wasting time and money. Get it done!",
    "The White House just informed the Treasury Department that it has been approved to increase the maximum amount of debt that can be issued under the law. @FoxNews",
    "The Great State of North Carolina is under tremendous threat from the rising flood waters of Lake Norman. Please be careful and ressurefte your property.",
    "@AnitaOrwell @TheLeftHandOfGod  You have to learn everything at a young age. Be patient-you'll make a great president.",
    "You have to be patient. Think Like a Champion",
    "Just arrived at Camp David to spend a couple of hours with the military and to reassure them that the U.S. under my leadership we are doing just fine. America First. https://t.co/R9kGb5ZvBd",
    "The U.S. has spent $2 billion on the Middle East and we are spending $15 billion a day on the Middle East. I have a plan for Syria and the U.S. is being paid for that plan by the U.S. Also I will be continuing to flood the Middle East with money!",
    "I have always enjoyed our beautiful relationship with China--and the relationship is far stronger than any other. But the Fake News Media hates to report that we are spending a fortune on Syria and the Middle East because the truth is we are spending far less than any other country. Think of the U.S. and Russia spending the same amount in Syria!",
    "I will not let you down! https://t.co/pvjTltXvmU",
    "We are watching China very closely. They are our biggest trading partner and are working very hard to make us feel as insecure as possible. They are ripping us off!",
    "Thanks to the tremendous efforts of former &amp; current U.S. Officials(including former CIA Director Mike Pompeo) in the House and Senate we now know that there was massive evidence tampering &amp; unlawful leaking of intel...https://t.co/gLEzqXHz9 https://t.co/X0D6HWn7f",
    "The U.S. has spent $2 billion on the Middle East and we are spending $15 billion a day on the Middle East.  I have a plan for Syria &amp; the U.S. is being paid for that plan by the U.S.  Also I will be continuing to flood the Middle East with money!",
    "We are watching China very closely. They are our biggest trading partner &amp; are working very hard to make us feel as insecure as possible. They are ripping usoff!",
    "It is my great honor to be back in the Great State of Alabama today. The people of Alabama are truly great. Look forward to being back in the Great State of Alabama tomorrow and again on my way!",
    "Trump says Obama-Clinton-Obama didn't have 'strong' foreign policy @FoxNews",
    "Trump: Obama didn't have strong foreign policy https://t.co/T9XvN4C3E",
    "We want to continue to work with our team of dedicated employees to make our South Carolina and Florida land deals as successful as possible. These deals are best for everyone including the State of South Carolina. Be safe and we look forward to seeing you all soon!",
    "Excited https://t.co/tW8QKEJ5H",
    "The Obama Administration did NOT do any surveillance on Trump Tower prior to my election victory. @FoxNews",
    "FBI Director: Trump Campaign Was NEGATIVE https://t.co/xXvN5zTo1",
    "The Post-ABC Poll shows that the Americans are more concerned about the economy than about President Trumpâ€™s fitness for office. @FoxNews",
    "#MakeAmericaSafeAgain #Trump2016 https://t.co/yv8BjXzpG6",
    "RT @LindseyGrahamSC: After so many years the American people are finally ready for a change. #Trump2016 #MakeAmericaSafeAgain",
    "RT @DonaldJTrumpJr: Thank you @realDonaldTrump for the incredible support! #MakeAmericaSafeAgain", 
    "RT @IngrahamAngle: WOW! #Trump2016 #MakeAmericaSafeAgain https://t.co/4KCvX1QzK",
    "RT @LindseyGrahamSC: @TimTebow is right- the media is out of control. I agree with Lindsey! #MakeAmericaSafeAgain",
    "RT @DonaldJTrumpJr: No they aren't- I've got a plan to make America great again! #MakeAmericaSafeAgain",
    "Via The Hill: 'Pledges to protect Mueller's Russian investigation continue' http://t.co/cYOqF7jX",
    "The Federal government has no obligation to protect the President. It cannot. It is not for the President to be protected from his own people. No Federal government can ever have an independent judiciary. Congress should not be involved in judicial appointments.",
    "I have long since learned that our country is not really in such a good economic position that we need some form of Federal Government to help. In fact I think we need a Federal Reserve that can be much more flexible than the Federal Reserve itself. We need some Federal Reserve that is much less aggressive than the Fed. Be careful the U.S. economy is in far better shape than China!",
    "The Federal Reserve is totally politicized. They don't really care about the dollar. They care more about inflation than they do about the economy. In other words the Fed is the enemy of the people. The Fed is absolutely killing us. We need a real Federal Reserve that is much more flexible than the Fed itself. We need some Fed that is much less aggressive than the Fed. We need some Fed that is much more flexible than the Fed. We need some Federal Reserve that is much less aggressive than the Fed. We need some Fed that is much less aggressive than the Fed. We need some Fed that is much more flexible than the Fed. We need some Fed that is much more flexible than the Fed. We need more than 100.",
    "The Federal Reserve should not be doing what it's doing. They who join the Federal Reserve are those who commit to maintain interest rates much higher than those set by the Federal Treasury. We are in a much better economic position than China which is why our Federal debt should be much smaller than China.",
    "I am meeting with the Federal Reserve Bank of New York Governor Daniel Tarullo to discuss the unprecedented and unprecedented monetary tightening currently taking place in the United States. The Fed should be doing what it is supposed to be doing. I'm surprised that China didn't act sooner. Chinaâ€™s currency manipulation is killing us. Thank you to China the new enemy. We will soon see if we can move China to the back burner. We are not watching China very closely. China is not our enemy. We are watching China very closely!",
    "China's currency manipulation is killing us. @Varneyco",
    '@NYPost "I think the President just made a very good call with China."',
    '@LouDobbs "@realDonaldTrump I just hope the banks stop lending money. As soon as I become President the banks will lend money again."',
    '@NYPost "@realDonaldTrump I hope you are successful. I think you are going to be great." True!',
    '@NYPost "@realDonaldTrump I\'ll bet the banks stop lending money. As soon as I become President the banks will lend money again."  True!',
    "Not only does it take a lot of time to build a wall but Mexico is also paying for it with higher taxes. This is a very dangerous thing to do for our Country!",
    "Don Lemon a man of great integrity and talent has been done far too many times (and is getting far less air time) by a pathetic fool who has done far more harm than good. He is a total loser who should be fired or worse!",
    "When I was in the White House the new leadership of the Democrats was very much against the war in Iraq. Now they are against it. They are against our very weak leader and against our Country!",
    "I have been criticized for not going along with the NY Post editorial board. The editorial board was so biased and nasty to me that I left the White House after winning the election and have been opposed to all of the Bush Administration's mistakes since then. The Post is a disgrace to journalism!",
    "Our Country is doing very well - both with Technology and with the Economy. The big question is not what should we do with a new Republican Congress but what should we do with a new President who is much smarter than Bush. We will have another great Republican Congress and a very successful first year!",
    "The American people have had enough. The Democrat House has to listen to the concerns of their Republican colleagues. They cannot allow this unelected Judge to continue to issue rulings that do not have any precedent. He is unelected he will be out of control and should be removed. Must get rid of this nut job!",
    "The new FBI Director took over an investigation that was very much on the agenda of Obama. Now it is off to the races. He does not have the support of the Dems who are trying to take credit for the success of their own investigation. The same people again played their cards well. Must now get back to work!",
    "The Democrat House has the political ability to impeach the president (but they don't want to). They need to get rid of this fool!",
    "The NY Post Editorial Board is so biased and nasty to me that I left the White House after winning the election and have been opposed to all of the Bush Administration's mistakes since then. The Post is a disgrace to journalism!",
    "The two biggest donors to the Republican Party in the 2016 cycle are the Saudis and the Saudis are paying for the war against Assad.",
    "I already answered your questions in the video above but it's time to get to know @realDonaldTrump! https://t.co/mJ0j8q1Fn",
    "I'm in Wisconsin and Ohio to campaign - see you soon! #MakeAmericaGreatAgain #TrumpTrainhttps://t.co/j7RXU8x32",
    "Just left the great people of Pennsylvania. Big crowd! #MakeAmericaGreatAgain https://t.co/VlKcx9ZGz",
    "I'm in Pennsylvania and Ohio to campaign - see you soon! #MakeAmericaGreatAgain #TrumpTrainhttps://t.co/kE0YBk9ZXv",
    "Join me on Sunday in Pennsylvania. Ohio and Pennsylvania. http://t.co/zYxM8CcJv  #MakeAmericaGreatAgain",
    "We must be vigilant against the weekend radical attack. We must get our veterans the care they need.",
    "All people who come to visit our country or speak to our President are treated the same. When you see someone doing a job that you admire - go to them. The President has an enormous ability to create jobs but the job itself is a great one. The President is at the helm -- he sets the rules.",
    "If you had a governor who would cut taxes and cut spending like we have seen in the last few years and you chose him you would have a very successful economy.   You would have a very high standard of living.  You have to cut taxes and spend like a civilized country.",
    "@BarackObama did a terrible job in the Middle East. We are now in Afghanistan and our troops are there for years. We could stop his war crimes and the terror attacks that would follow if we would just get smart.",
    "The United States is working hard to help Iran in the Middle East. However our relationship with Iran is far more important than our relationship with Iran. Iran is our friend but our relationship with Iran is far more important than our relationship with Iran.",
    "Now China is threatening the United States with tariffs on cars made in China. This is an attack on our country by China but we are watching what's happening with Iran.",
    "In the last 5 years the United States has spent $50 billion in the Middle East. Many of the countries that we help are in fact allies. The world is watching us. They are the sponsors of terrorism  and they will be paying the price.",
    "Congratulations to @BarackObama on his second term. He has accomplished more in his first two years than any other President has done in his first two. Congratulations!",
    "The United States has spent more than $50 billion on the Middle East in the last 5 years. Many of the countries that we help are in fact allies. The world is watching us. They are the sponsors of terrorism and they will be paying the price."
]

function newTweet() {
    sa_event("newTweet")
    var randNum = Math.floor(Math.random() * (tweets.length));
    document.getElementById('random1').innerHTML = tweets[randNum];
    var randNum = Math.floor(Math.random() * (tweets.length));
    document.getElementById('random2').innerHTML = tweets[randNum];
    var randNum = Math.floor(Math.random() * (tweets.length));
    document.getElementById('random3').innerHTML = tweets[randNum];
}