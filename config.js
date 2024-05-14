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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_12_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3LFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICA5NixcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWEZVMVhYbkNzd1M2YVIrM0NsSkQ1TWZ5QWVsM2pSZkpUcFpEaXNZVnJEST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidmhnV2ozVi1SU0tiU1IxMExWNlg2Z1wiLFxuICBcInBob25lSWRcIjogXCI3NDNkZDFjOS04MjMyLTRlMmUtOTI3Yi03MzM0ZDNjY2MxNmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAxNDAsXG4gICAgICA1NixcbiAgICAgIDIyNSxcbiAgICAgIDE5NCxcbiAgICAgIDE5OCxcbiAgICAgIDY1LFxuICAgICAgMzMsXG4gICAgICA2OCxcbiAgICAgIDI1MCxcbiAgICAgIDc5LFxuICAgICAgMTcyLFxuICAgICAgNDksXG4gICAgICAyMjcsXG4gICAgICAxNjEsXG4gICAgICA1MCxcbiAgICAgIDIwNSxcbiAgICAgIDE3MixcbiAgICAgIDMwLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgODUsXG4gICAgICAyMzEsXG4gICAgICAxNTcsXG4gICAgICAxMzYsXG4gICAgICAxNTIsXG4gICAgICAxNjUsXG4gICAgICAyMzAsXG4gICAgICAxNjIsXG4gICAgICAxMDQsXG4gICAgICA3LFxuICAgICAgNjYsXG4gICAgICAyNTAsXG4gICAgICAxMzEsXG4gICAgICA1NSxcbiAgICAgIDEyLFxuICAgICAgNzAsXG4gICAgICAxMjIsXG4gICAgICAxMzEsXG4gICAgICAxNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFhRNFo0ODNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzcwMTYwMTgwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLQus65zrdnINGVzrHOsdegzrkgz4PGksaSzrnCos65zrHihJMuLi4uL1xcXFxfXytcIixcbiAgICBcImxpZFwiOiBcIjI0ODg5ODA4NjAxNTAyOTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kvejRiTURFTURpamJJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1RzejNsL29EYkk4YTlVVnQwWlA4ZEhMTzNwMHIxQmRUUWF2MTc1Z21Rbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLNERDWmdQeDVzbXZjZjVXK0ZtcThIOUZmMXBnaWV2aVBIMHB4NGVSaUpEMXk3bGZsUk5IKzVkMmdpZzJOUm9SNXNKTXQyUWlWN084UXByMWJxbjdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3YTdMRlRUN29Jb2poWDdMQitRanJXSXlPbm1RNGUwYjRORllYRHlndHd4RXlaSGt3blI0MzZWclVHeFYvVXRNbERGaFhQMys4blkrZ09uTTJtUjhBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MDE2MDE4MDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU2OTU5MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEU1FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURTUS5qc29uIjogIntcImtleURhdGFcIjpcIjRmc3B5ZzExc2hFc0djVjNBdlZwQ2pVR0E1OXJJNlJOZWQxcXRjMDl4c2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTEzODY1MTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
