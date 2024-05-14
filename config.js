const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="gampaha,colombe."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://saajidbot:Saajid@12@cluster0.8elm5cj.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "මම තාමත් පන පිටින් සදමාලි🙃😅❤️" 


global.devs = "94770160180" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94770160180";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_36_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNixcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQsXG4gICAgICAgIDMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxLFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI5LFxuICAgICAgICA4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM2VnZlJZTUVGempHeTZpL2xHaTl1dnVmTkZmWjhRdmIrTzlVU2xmNy9Vdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWZtM1U3WXVRU0tlczYzWHhwMEtlZ1wiLFxuICBcInBob25lSWRcIjogXCIyMjczMjNkYy0zOTc1LTQwYjgtYTI5NS0zNzllZmZmY2VhY2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxMjUsXG4gICAgICA3OCxcbiAgICAgIDczLFxuICAgICAgMTA2LFxuICAgICAgMTEyLFxuICAgICAgMTI1LFxuICAgICAgMjI1LFxuICAgICAgMjQ3LFxuICAgICAgMTE4LFxuICAgICAgODksXG4gICAgICAyOSxcbiAgICAgIDE2OCxcbiAgICAgIDIxLFxuICAgICAgMTUyLFxuICAgICAgNyxcbiAgICAgIDEzOSxcbiAgICAgIDE5NSxcbiAgICAgIDk1LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTg1LFxuICAgICAgMjA3LFxuICAgICAgMTk1LFxuICAgICAgMTMyLFxuICAgICAgMTk4LFxuICAgICAgMTI1LFxuICAgICAgNzMsXG4gICAgICAyMTYsXG4gICAgICAyMTIsXG4gICAgICAxNjgsXG4gICAgICAyMzIsXG4gICAgICAxOTEsXG4gICAgICA2NyxcbiAgICAgIDQ5LFxuICAgICAgMTIwLFxuICAgICAgMTUzLFxuICAgICAgMTM3LFxuICAgICAgMjAyLFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkhONDVLTEdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcwMTYwMTgwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0ODg5ODA4NjAxNTAyOTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIjwg0ZXOsc6x16DOueKIgiDinaTvuI/wn5Km8J+Sq1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xMXgvc0NFSWJraXJJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV0NIQ1Z4U1o3Q2R4ckdTV0xra0Rpb2FUaFhKZmxobmNsM3RrVm13bTZ4UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBenhmamsvdWw5bjFST0lZWWd6QTJoWU9WMFBhQ2YzZFhkY0txSWNxU01RS0pIdlJmd0dDSUVoK3NwcXY1aCszVUpvNzEvQmNudlN0T0VhMkxmREREdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4bGJQK1RsRS84ZldMT2lJaUw1ckFaQ0NMNDFIdVVzMTkyVUpZWEZmSGc3QXpLYjdRT3VCbkFsOTlXTjVzR21XNGVhRnVKTVVlb1BEYXZnK0VnM0NoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MDE2MDE4MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTY0Njk4NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY3d1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjd3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWG1EOGwzdWlBcnNGZVpZcWUxY095UERxV2VGUE54TWcxVE8wTWtxdDVpcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3OTU5OTA3NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "King saaji",
  packname: process.env.PACK_NAME || "King saaji",
  botname : process.env.BOT_NAME  || "King_saaji",
  ownername:process.env.OWNER_NAME|| "It'x King saaji",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
