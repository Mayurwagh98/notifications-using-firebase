import { useEffect } from "react";
import "./App.css";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const reqPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BFB748QNkYHXE0lIFoyOazocDvviFjSrh2KiJKu032W3W0c7PxJ4Y0xax3D3cJ_p6CQ3PGK2DoKRq2Ar4qURXnI",
      });
      console.log("token genrated", token);
      // send this token to db
    } else if (permission === "denied") {
      alert("you denied notifications");
    }
  };
  // const messaging = getMessaging();
  useEffect(() => {
    // request user for permission
    reqPermission();

    //when user's tab is on then this function will show the notification
    onMessage(messaging, (payload) => {
      // console.log("Message received. ", payload);
      alert(payload.notification.title);
    });
  }, []);
  return (
    <>
      <ToastContainer />
    </>
  );
}

export default App;
