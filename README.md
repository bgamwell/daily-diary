***About***

Daily Diary (new name pending) will be a simple daily diary app that features a landing page, a login modal, a signup modal and a user profile (only available after login). The user profile will include a user profile picture (uploaded on signup), a randomly generated inspirational quote from the day (API or rendered randomly from an array of quotes in MongoDB) and a list of user-entered "diary entries" sorted in reverse chronological order. These diary entries will be limited to 40 characters, and can be edited after they're written. They will each contain a time stamp.

Future iterations of the project will allow users to:
-Visualize the frequency of their posts
-Search diary entries
-Share diary entries on social media
-Schedule SMS reminders to fill in their diary (via Twilio)

While the initial version of this app may be simple, we will focus on creating a stellar landing page and an unmatched UI. The app will be fully responsive and will (we hope) run flawlessly in both Web browsers and on mobile devices.

***User Story***

Sally is a busy millennial working at a tech startup in San Francisco. Although her days are filled with activities, she has little time to record what she's done, and often forgets how busy she's been. She sometimes finds herself wondering where all her time went. Daily Diary is a solution for Sally--as well as for millions of other millennials with hectic schedules and a desire to save their meaningful activities in a concise yet structured way.

***Schemas***

var UserSchema = new Schema ({
  firstname: String,
  lasname: String,
  email_address: String,
  profile_picture: image // if I can figure out how to do an upload, or a URL to a publicly avail online image
  passwordDigest: String
});

var EntrySchema = new Schema ({
  diary_entry: String,
  date: String, // will be automatically generated
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});
