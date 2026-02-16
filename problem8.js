const sen = "Learn with sumit is all about teaching web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advanced topics using the latest best practices for you seasonded web developer"
 const matched = sen.match(/learn/gi);
 const appear = matched ? matched.length : 0;
 console.log(appear)
