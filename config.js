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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_11_05_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc1LFxuICAgICAgICA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgODksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmUHlLMmcvVVVma0dueFc0R3JrdnFiVEVwdVh1Y2ZkK2dmMjBrYlBKZitjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4bTRYS05zQlRJR2xxdkhzM002QkVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhmYmNjZWViLTgxODEtNGViNy05NDEzLWUxNDYzYTczNDc2YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDE0NyxcbiAgICAgIDIyMixcbiAgICAgIDE3OCxcbiAgICAgIDQsXG4gICAgICAxNzQsXG4gICAgICAxNTYsXG4gICAgICA1MCxcbiAgICAgIDE3OSxcbiAgICAgIDY4LFxuICAgICAgMTg0LFxuICAgICAgMTgzLFxuICAgICAgMTg3LFxuICAgICAgMTMyLFxuICAgICAgMTk3LFxuICAgICAgMTgwLFxuICAgICAgMTI0LFxuICAgICAgNDgsXG4gICAgICAxMzYsXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDg5LFxuICAgICAgMjIyLFxuICAgICAgMTQ0LFxuICAgICAgMTc1LFxuICAgICAgNDEsXG4gICAgICAxMDcsXG4gICAgICA5MSxcbiAgICAgIDIwNCxcbiAgICAgIDIyOSxcbiAgICAgIDIwMyxcbiAgICAgIDE3NixcbiAgICAgIDU0LFxuICAgICAgNDAsXG4gICAgICA1NixcbiAgICAgIDU4LFxuICAgICAgOTksXG4gICAgICA3NSxcbiAgICAgIDE4OCxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT20xeC9zQ0VPZTkvN0VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXQ0hDVnhTWjdDZHhyR1NXTGtrRGlvYVRoWEpmbGhuY2wzdGtWbXdtNnhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtrVDY2ejgxYTNrdVJSa2ljc0dWWUFUVW1tU3VqV1gxd2FWRTYzZXdMWndtMktleHpQOVJYL1QwZDRNeTVGU3J0cDlIV08wNnBsSjQwa05yUnM0Q0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJZaHloTVoxcm5NOTR4cXZuazJmdUQ3RExncS81bTR6L0lQaTN2Nnk1cUZ4cmF4WWl6cmhvdXRTMVBjOEF1NHZSNzRxUlN5OGl5Sm5zWDhlMERWb2h3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzAxNjAxODA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4ODk4MDg2MDE1MDI5OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiPCDRlc6xzrHXoM654oiCIOKdpO+4j/Cfkqbwn5KrXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MDE2MDE4MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTQ2MTg2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUY3d1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRjd3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWG1EOGwzdWlBcnNGZVpZcWUxY095UERxV2VGUE54TWcxVE8wTWtxdDVpcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3OTU5OTA3NjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTQ2MTg3NDE1MlwifSIKfQ=="  // PUT your SESSION_ID 


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
