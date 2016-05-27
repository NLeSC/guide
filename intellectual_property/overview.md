# Overview

This section gives an overview of intellectual property (IP) laws, with the basics of each explained. This is not an exhaustive list; only laws that are relevant to our software development practice are listed. If you're interested in protecting a plant, boat hull, or microprocessor mask, then you should look elsewhere. Also, there are areas of law beyond intellectual property that often show up in software development practice, like contract law and consumer law; these are also not covered here.

Of the IP laws, copyright is the best known one, since it directly protects software. However, the others come up regularly at the eScience Center as well, so they're also important to know about.


## About the law

Laws are documents that describe what you are allowed to do in a particular jurisdiction. They are made by (hopefully democratically elected) legislators, and they're written for humans to interpret. Laws can be very specific on some points, but also often leave certain things vague. Sometimes this is even done on purpose, when the legislators decide that they cannot foresee all the cases that will develop in the future.

In case of some conflict, either between society and some individual or company in it, or between companies or individuals, some interpretation of how the law applies to this specific case has to be made. This is done by a judge. Judges will take into account the text of the law itself, the (recorded) discussions that took place when it was made, and rulings by other judges in similar cases. By doing the latter, they try to keep things consistent and therefore fair. The collected rulings of earlier cases are together known as case law ("jurisprudentie" in Dutch). Over time, the vague areas in a law are filled in by case law. However, this is a slow process, and it may be incomplete: if the law is vague and there is no case law yet, then a gray area remains.

As a result, it often makes more sense to think about legal issues in terms of probabilities and risk, rather than in terms of truth. This means that decisions on how to act given the legal situation always have a policy component to them. How important is what you want to do, and how much risk are you willing to take? Of course, there is always an ethical side to these kinds of decisions as well: something may be strictly speaking legal, but that doesn't automatically make it the right thing to do. So consider carefully, and if necessary, escalate to management.


## Trademarks

A trademark is the exclusive right to the use of a sign or design for the purpose of identifying the manufacturer of a product or supplier of a service. Trademarks are typically words or logos, but protection may extend to colors and even smells. Trademarks protect brands and reputations, and serve to avoid confusion in the marketplace. Because of this, similar or even identical trademarks may coexist, if the corresponding companies sell different kinds of goods or services, or operate in different areas.

As an example, Apple Records and Apple Computer co-existed peacefully despite the similar names, as it is obvious that an Apple laptop comes from Apple Computer, and an Apple CD from Apple Records. But when Apple Computer added a sound chip to the Apple IIGS, Apple Records sued them (and later sued them again over the Mac's system sound, and then about iTunes), because they were now in the same (music) market.

### Getting a trademark

Trademarks can be registered with the patent and trademark office, after which they're marked with an ® symbol. This in not required however, just using it in practice to identify your products is in principle enough. Non-registered trademarks are marked with a ™ symbol. Both are legally valid, but if your trademark is not registered, then you'll have to prove to the judge that you are using it as such, whereas for a registered trademark this is simply assumed.

Our Netherlands eScience Center logo is an example of a (non-registered) service mark (℠). Service marks are essentially the same thing as trademarks, but they don't identify physical products (we don't make any) but services or intangible products, and as such are applied to equipment and uniforms and such. The idea is the same however.

### Losing a trademark

Trademarks lose their protection if they no longer identify a particular manufacturer, but become general terms for a category of products. For instance, a walkman is a portable audio cassette player. Sony® owns a trademark on that word, but in 2002 an Austrian judge ruled that since the word was in the dictionary as describing any portable audio cassette player, it had become a general term that is therefore not eligible for trademark protection.

Companies do not want to lose their trademarks, so they're usually quite active about protecting them. Most companies have a trademark policy that is designed to protect their trademarks from becoming generic. Google®'s trademark policy for instance says that you should tell people to "do a Google search" for something rather than "Google it", as the latter uses the term generically to mean doing a web search. If you infringe on someone's trademark, you're likely to get a more-or-less friendly letter telling you to quit it or be sued.

### Using a trademark

Using trademarked words to refer to the corresponding product or company is generally fine, just make sure that you use them together with the generic term as in the example above. If you use a trademark, you should acknowledge that it is a trademark using one of those ubiquitous notices like "Sony® is a registered trademark of Sony Corporation". Almost all companies have rules on what to do exactly, a web search for "<company> trademark guidelines" will show you the way.

Software licenses (even Free Software licenses) typically do not give out trademark rights, so you may have to rename a fork if the origin considers your fork harmful to their brand. See e.g. Firefox® (a registered trademark of the Mozilla Foundation) and IceWeasel.


## Trade Secrets

A trade secret is a secret with an economic benefit to the company that holds it. The recipe for Coca-Cola® is an oft-cited example, the source code for a proprietary software program may be another. Trade secrets are protected by Non-Disclosure Agreements: contracts that forbid you from sharing them with anyone. In The Netherlands, there is no specific law on trade secrets, so these contracts are all that protect them. In particular, that means that if someone spills your trade secret, then you can sue that person, but you can't do anything against the recipient of the secret. In the US, this is different: there it is a criminal offense to make use of a leaked trade secret, and you can go to jail for doing so.


## Patents

From a societal point of view, trade secrets can be considered damaging. Progress can be made much more quickly if competitors can use each other's inventions, but that is impossible if everyone keeps their inventions a secret. Patents ("octrooien" in Dutch, "patent" means that you're looking good) are intended to remedy this situation.

A patent is the exclusive right to make, use and sell an invention, in exchange for publication of the invention. Patents have a limited duration, which varies from place to place but is usually around 20 years. Patents cover devices that are new, inventive, and applicable to some problem. Discoveries, designs, business models, software and visualizations can not be patented (but see below).

### Getting a patent

Patents are obtained by writing up a description of the patent, with a list of claims that describe the claimed invention, and submitting that description to the patent office of the country where you want protection, together with a hefty fee. The patent office will then do a (often very cursory) check to see if the patent meets the requirements, and grant it. Once you have a patent, you are the only one allowed to use or sell the claimed invention; anyone else will need to buy a license from you, or prove that the patent is invalid.

### Software patents

While software cannot be patented because it's not a device, a computer is a device. Some time ago, clever lawyers (especially in the US) therefore started filing patents for a machine that performs certain computational steps. While a piece of software or an algorithm therefore technically cannot be patented, anyone using that software or algorithm would still infringe the patent.

The main problem with software patents is that there are a huge number of them out there, and they're written in obfuscated legalese. Many are likely invalid due to not being new, being too obvious, or being overly broad (the patent office's checks are minimal), but defending against someone with a lot of patents is very expensive unless it's completely obvious that you're not infringing anything. It is therefore quite easy to extort money from people by collecting a pile of patents, and threatening to sue them. Meanwhile, the benefit to society is long lost, because no one uses patents to figure out how to solve programming problems.

Unfortunately, there's not much we can do to remedy this situation. In practice, just avoid using things that you know are patented, and hope for the best.


## Database Rights

Database rights are a very new addition to the IP stable, and they exist only in the EU and a few other countries. Database rights protect the investment made to create a particular collection of information. According to these laws, whoever invests in the creation of a database gets the exclusive right to extract or reuse (make available to others) substantial parts of the database, or repeatedly extract or reuse insubstantial parts of the database.

### Getting database rights

So, if you pay someone to collect data and put it into a database, then you own the database rights on that database for the next 15 years (in the EU at least). If you then offer access to the database online, people can query it and use the information they got out of it, but they're not allowed to download the entire database and share it with others. Also, making another website that forwards queries to yours and returns the results is not allowed.

### Other protections for databases

The individual data items in a database are not protected by database rights, but they may be protected by other IP laws. For instance, if you pay someone to scan a large number of newspaper articles and put them into a database, then you get to own the database rights to that database (because you paid to make it), but each individual article is also protected by copyright, which is owned by the newspaper. Simple facts cannot be copyrighted however, so e.g. individual measurements in a database of sensor data are not protected.

A database can also be protected by copyright, if the selection and arrangement of the contents makes it a creative work. If you manually select newspaper articles and order them in a particular way so as to tell a story, the resulting database may be eligible for copyright protection, also in places where database rights do not exist. Furthermore, the data structure of a database (e.g. the DDL description of an SQL database structure) may be protected by copyright, just like software is.

### Licensing database rights

Permission to extract and reuse substantial parts of a database can be given to others by the owner of the database rights via a license. Starting with version 4.0, the well-known [Creative Commons](https://www.creativecommons.org) (CC) licenses include a grant of database rights, making them suitable for use with databases. There is also the Open Database License, which predates CC 4.0, and has a more academic origin. The default database license at NLeSC is the [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) license. Putting this license on your database will simultaneously license both the database rights and the copyright (if any) on the database itself and on its contents all under the same well-known and widely used terms.


## Copyright

Copyright covers original works of authorship (works of art or science, as Dutch law puts it), like books, plays, films, music and photographs, provided there was some creativity involved in making them. Copyright also covers collections, like anthologies or coffee table books with nicely arranged photographs. The owner of the copyright in a work has the exclusive right to copy that work, and to make derivative works.

A derivative work is itself a work, but one that depends on another work. A translation of a book is an example, because translating is itself a creative act, but the translation also derives from the original. Subtitles for TV series or a new, updated edition of a textbook are also examples of derivative works.

### Getting copyrights

In any country that has signed the Berne convention on copyright, all works of authorship are automatically protected by copyright as soon as they are made. Since 1989, when the US signed the Berne convention, this goes for all major countries, but before that, there were countries where it was necessary to explicitly claim copyright on a work, by adding the © symbol or a phrase like "All rights reserved". Other than in Iraq, Somalia, North Korea and a few other such countries, this is now no longer needed, and we don't do it.

Copyrights can be transferred, e.g. by selling them or giving them away. In many countries, including in Europe, there are some rights that always remain with the author however, such as the right to be recognised as the author and to have your reputation protected with regards to the work. A very common way in which copyright ends up in the hands of someone other than the author is by work for hire: if you make something as part of your employment, your employer gets the copyright, unless otherwise agreed.

### Copyright and software

Copyright predates software, but since software is a work of authorship, it is also protected (these days most copyright laws mention it explicitly). Copyright on software covers copying of the program (in whichever form), including copying from disk to RAM so as to run it. Dutch law has an explicit exception for the latter: if you have a legal copy on disk, then you're allowed to copy it to RAM so as to run it.

Exactly what constitutes a derivative work of a computer program or library is a gray area, with little to no case law available. In other words, no one knows for sure what a judge would decide. On the other hand, there is a kind of common understanding of how it should probably work, and people operate on those assumptions with few problems so far.

### Licensing copyright

If you own the copyright for a work, including software, then you can give others permission to make copies and derivative works by giving them a license (that's actually specifically mentioned in the law). A license is a specific or general offer of the right to make copies. For example, Dell™ has a license from Microsoft® to make copies of Microsoft Windows® and install them on the computers they sell. This is a specific offer written down in a contract between the companies. If we put up some code on the web under an open source license, then we are making a general offer to anyone who wants it to use our code under those terms.

Note that the End User License Agreement that often pops up when you install some software, is, despite the name, typically not a copyright license, since it doesn't give you permission to copy or create derivative works. Instead, it's legally a contract, which is why you have to click OK to accept it.

There are many software licenses out there, including some common Free and Open Source Software licenses. More on these and how to use them is in the next chapter.


## Trademark acknowledgements

Apple is a trademark of Apple, Inc., registered in the U.S. and other countries.

Coca-Cola® is a trademark of The Coca-Cola Company, registered in the U.S. and other countries.

Dell™ is a trademark of Dell, Inc.

Firefox® and Mozilla® are registered trademarks of the Mozilla Foundation.

Google™ is a trademark of Google, Inc.

Microsoft® and Microsoft Windows® are either registered trademarks or trademarks of Microsoft Corporation in the United States and/or other countries.

Sony® is a registered trademark of Sony Corporation.



