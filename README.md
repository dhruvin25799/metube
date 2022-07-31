<h1 align="center"><b>MeTube</b></h1>
<div align="center">MeTube is a React Video Library app.</div>


---

## **Live App**
To view the website live in action visit\
[MeTube](https://metube-app.netlify.app/).


https://user-images.githubusercontent.com/47236093/182037854-51a26e8a-aa92-47d7-89b5-1819890343dc.mp4


---

## **Functionality** 
* Navbar
  * Navbar has links to navigate to home, my-list, history and login/register.
  * There is also a theme toggle button to toggle between dark/light mode. The default is dark mode for all our dark side lovers.
* Auth
  * To use this app you will have to login/signup.
  * You can either create an account or use or default one for testing
  * Email : mailme.sangitamehta@gmail.com
  * Password : 1234567890
  * The app is made in such a way to not allow you to view any page and redirect to login if not logged in. 
* Landing Page
  * CTA Banner -> A random CTA banner that updates everytime you visit the home page with a random movie. Has 2 button -> Play Now & Add to List.
  * Categories are displayed with their respective videos in a scrollable carousel
  * If you watch any video/ add any video to your list, it is also displayed as a category on the home page.
* Single Video Modal
  * On clicking on any video thumbnail, a modal is displayed with the selected video.
  * You can play the video, on playing it's automatically added to your watch history.
  * Like button and add to list button are also displayed.
* My List
  * Displays all vidoes added to your list in a carousel.
  * Liked videos are also displayed in a section here.
  * Clicking on any video you can open it's modal and unlike/remove from list.
  * You can create new lists from the CTA button
  * Each List will have it's videos and a delete button on it's thumbnail to delete it from the list.
  * Each list will have a trash can to delete the list and it's contents.
* History
  * When you start playing a video, it is automatically added to your history and displayed here.
  * History can be completely cleared on clicking the clear history button.
* Login/SignUp
  * This is the first page rendered when a user first visits the app.
  * Either you can Sign In or Sign Up.
* Responsiveness
  * All pages are made responsive to mobile screens. (Width<480px)
  * Navbar is also made responsive on mobile screens with a hamburger/close icon to toggle the full navbar.

---

## **Backend** 
Backend for this app is a mock backend [MockBee](https://mockbee.netlify.app/).
Refreshing the page will delete all data from the backend as the app restarts.
The data will persist between multiple login/logout/signup sessions if not refreshed.

---

## **How to run this app**
To run this app locally on your machine, clone the repo to your local machine.\
In the project directory, you can run\
`npm start`\
This will start the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
Make sure you have access to internet to make use of the API call inside the App.
