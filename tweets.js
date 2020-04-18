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
    "The Great State of North Carolina is under tremendous threat from the rising flood waters of Lake Norman. Please be careful and ressurefte your property."
]

function newTweet() {
    console.log('success');
    var randNum = Math.floor(Math.random() * (tweets.length));
    document.getElementById('random1').innerHTML = tweets[randNum];
    var randNum = Math.floor(Math.random() * (tweets.length));
    document.getElementById('random2').innerHTML = tweets[randNum];
    var randNum = Math.floor(Math.random() * (tweets.length));
    document.getElementById('random3').innerHTML = tweets[randNum];
}