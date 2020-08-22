# الوظيفة : 

اختيار انمي عشوائي على حسب النوع الذي تحدده عن طريق الضغط على الرياكشن.

# التثبيت : 

`npm i xmlhttprequest`

`npm i okanime-search --save`


# التشغيل : 

```javascript
const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {

  console.log(`----------------`);
  console.log(`Bot Started.`);
  console.log(`----------------`);

});


const OKsearch = require("okanime-search");

    client.on("message", async message => {

      
      if(message.content === "+search") {

OKsearch.search(); // التشغيل

      }

    });


client.login('BOT_TOKEN'); // BOT_TOKEN = توكن البوت الخاص بك
```
