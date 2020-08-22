const { RichEmbed, GuildMember, Message, MessageEmbed, version, Discord } = require("discord.js");
const { EventEmitter } = require('events');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


	/**
	 * Checks a message.
	 * 
	 * @param {Message} message The message to check.
	 * 
	 * @returns {Promise<boolean>} Whether the message has triggered a threshold.
	 * 
	 * @example
	 * client.on('message', (msg) => {
	 * 	antiSpam.message(msg);
	 * });
	 */

class animeSearch extends EventEmitter {

   async message(message) {



            if(!message.channel.guild)return;

            
            // Start Embed
            
  
            
            const embed = new RichEmbed() 
            .setTitle("OkAnime || Search")
            .setURL("https://www.okanime.com/")
            .setDescription("**`اضغط على رياكشن نوع الانمي الذي تريد البحث عن (يتم اخذ انمي عشوائي في كل مرة).`**")
            .setThumbnail("https://cdn.discordapp.com/icons/308703864889278485/a_40c286c6a2ef9ad8d3f965d7aec294a2.gif?size=1024")
            .addField("⚔️","**مغامرة**",true)
            .addField("🗡️","**أكشن**",true)
            .addField("🏎️","**سيارات**",true)
            .addField("😂","**كوميدي**",true)
            .addField("😈","**شياطين**",true)
            .addField("👙","**Ecchi**",true)
            .addField("🎮","**لعبة**",true)
            .addField("👻","**رعب**",true)
            .addField("♥️","**رومنسي**",true)
            .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            message.channel.send(embed).then((m) => {
            
              m.react("⚔️").then(() => {
                m.react("🗡️")
              }).then(() => {
                m.react("🏎️")
              }).then(() => {
                m.react("😂")
              }).then(() => {
                m.react("😈")
              }).then(() => {
                m.react("👙")
              }).then(() => {
                m.react("🎮")
              }).then(() => {
                m.react("👻")
              }).then(() => {
                m.react("♥️")
              })
            
            // Reaction Collector
            
            
            let r01 = (reaction, user) =>reaction.emoji.name == "⚔️" && user.id == message.author.id;
            let r1 = m.createReactionCollector(r01);
            
            let r02 = (reaction, user) =>reaction.emoji.name == "🗡️" && user.id == message.author.id;
            let r2 = m.createReactionCollector(r02);
            
            let r03 = (reaction, user) =>reaction.emoji.name == "🏎️" && user.id == message.author.id;
            let r3 = m.createReactionCollector(r03);
            
            let r04 = (reaction, user) =>reaction.emoji.name == "😂" && user.id == message.author.id;
            let r4 = m.createReactionCollector(r04);
            
            let r05 = (reaction, user) =>reaction.emoji.name == "😈" && user.id == message.author.id;
            let r5 = m.createReactionCollector(r05);
            
            let r06 = (reaction, user) =>reaction.emoji.name == "👙" && user.id == message.author.id;
            let r6 = m.createReactionCollector(r06);
            
            let r07 = (reaction, user) =>reaction.emoji.name == "🎮" && user.id == message.author.id;
            let r7 = m.createReactionCollector(r07);
            
            let r08 = (reaction, user) =>reaction.emoji.name == "👻" && user.id == message.author.id;
            let r8 = m.createReactionCollector(r08);
            
            let r09 = (reaction, user) =>reaction.emoji.name == "♥" && user.id == message.author.id;
            let r9 = m.createReactionCollector(r09);
            
            //
            
            r1.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D8%A3%D9%83%D8%B4%D9%86', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`مغامرة`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r2.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              m.delete(3)
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D9%85%D8%BA%D8%A7%D9%85%D8%B1%D8%A9', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`أكشن`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r3.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              m.delete(3)
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`سيارات`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r4.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              m.delete(3)
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D9%83%D9%88%D9%85%D9%8A%D8%AF%D9%8A', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`كوميدي`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r5.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              m.delete(3)
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D8%B4%D9%8A%D8%A7%D8%B7%D9%8A%D9%86', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`شياطين`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r6.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              m.delete(3)
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=Ecchi', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`Ecchi`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r7.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              m.delete(3)
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D9%84%D8%B9%D8%A8%D8%A9', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`لعبة`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r8.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
              m.delete(3)
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D8%B1%D8%B9%D8%A8', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`رعب`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            r9.on("collect", v => {
              m.delete(3)
              r1.stop();
              r2.stop();
              r3.stop();
              r4.stop();
              r5.stop();
              r6.stop();
              r7.stop();
              r8.stop();
              r9.stop();
            m.delete(3)
            
              var xhr = new XMLHttpRequest();
                    xhr.open("GET", 'https://www.okanime.com/partials/filter_animes?utf8=%E2%9C%93&genre_list=%D8%B1%D9%88%D9%85%D8%A7%D9%86%D8%B3%D9%8A', true);
                   
                    xhr.addEventListener("load", function() {
                            let msg = xhr.responseText;
                            if (!msg) msg == '';
            
            
                            // Get Random 
            
                            // Random Name
                            let counth = msg.match(/<h6>/g).length;
                            let counth6 = Math.floor(Math.random() * counth);
            
                           //
            
                           //Get Name
                            var name0 = msg.substring("0").split('<h6>')
                            var name = name0[counth6].substring("0").split('</h6>');
                          ///
            
                           //Get Rating
                           var rate0 = msg.substring("0").split('<small class="rating-item">')
                           var rate = rate0[counth6].substring("0").split('<i class="fas fa-star">');
                         ///
            
                           //Get Image
                           var image0 = msg.substring("0").split('data-src="')
                           var image = image0[counth6].substring("0").split('"');
                         ///
            
                           //Get Season
                           var sea0 = msg.substring("0").split('<span class="video-subtitle">')
                           var sea = sea0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get Desc
                           var des0 = msg.substring("0").split('<p>')
                           var des = des0[counth6].substring("0").split('</p>');
                         ///
            
                           //Get Year
                           var y0 = msg.substring("0").split('<div class="year-tags"><span>')
                           var y = y0[counth6].substring("0").split('</span>');
                         ///
            
                           //Get URL
                            
                           let msg1 = msg.replace(/\s+/g," ");
            
                           var u0 = msg1.substring("0").split('<div class="hover-item-info"> <a href="')
                           var u = u0[counth6].substring("0").split('">');
            
                         ///
            
            
            
                         // Send Embed
            
                         let im = "";
            
                         if(image[0].startsWith("https")){
            
                          im = image[0].replace(".webp","");
            
                         }else if(image[0].startsWith("http")){
            
                          im = image[0].replace(".webp","");
            
                         } else {
            
                      im = `https://www.okanime.com${image[0].replace(".webp","")}`;
            
                         }
            
            
                         let t = "";
            
                         if(name[0].length > 255){
                        
                        t = "OkAnime";
                        
                         }else{
                        
                          t = name[0];
                        
                         }
            
            
                         let sembed = new RichEmbed() 
            
            
            
            
            
            
            
                         .setTitle(t)
                         .setURL(`https://www.okanime.com/${u[0]}`)
                         .setThumbnail(im)
                         .addField("⭐ | **Name: **", "**`" + name[0] + "`**",false)
                         .addField("⭐ | **Rate: **", "**`" + rate[0] + "`**",true)
                         .addField("📅 | **Year: **", "**`" + y[0] + "`**",true)
                         .addField("🎞️ | **Season: **", "**" + sea[0].replace(/(\r\n|\n|\r)/gm," ") + "**",true)
                         .addField("📊 | **Type: **", "**`رومنسي`**",true)
                         .addField("🔗 | **Link: **", ` **[Click Here](https://www.okanime.com/${u[0]})**`,true)
                         .setDescription("**Description : `" + des[0] + "`**")
                         .setFooter("Requested By : " + message.author.tag, message.member.avatarURL)
            
            message.channel.send(sembed)
            
                         //
            
                    });
                    xhr.send();
            
            });
            
            })
   

      }
    }
  

  module.exports = new animeSearch();
