import { useEffect, useState } from "react";
import "./App.css";
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function App() {
  const [saveToken, setSaveToken] = useState("");
  const reqPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // generate token
      const token = await getToken(messaging, {
        vapidKey:
          "BFB748QNkYHXE0lIFoyOazocDvviFjSrh2KiJKu032W3W0c7PxJ4Y0xax3D3cJ_p6CQ3PGK2DoKRq2Ar4qURXnI",
      });
      console.log("token genrated", token);
      setSaveToken(token);
      // send this token to db
    } else if (permission === "denied") {
      alert("you denied notifications");
    }
  };
  // const messaging = getMessaging();

  // const postData = async () => {
  //   const payload = {
  //     to: saveToken,
  //     notification: {
  //       title: "Testing firebase",
  //       body: "hey there",
  //     },
  //     data: {
  //       key1: "value1",
  //       key2: "value2",
  //     },
  //   };

  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization:
  //       "BFB748QNkYHXE0lIFoyOazocDvviFjSrh2KiJKu032W3W0c7PxJ4Y0xax3D3cJ_p6CQ3PGK2DoKRq2Ar4qURXnI",
  //   };

  //   try {
  //     const { data } = await axios.post(
  //       "https://fcm.googleapis.com/fcm/send",
  //       payload,
  //       { headers }
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error sending notification:", error);
  //   }
  // };

  useEffect(() => {
    // request user for permission
    reqPermission();

    //when user's tab is on then this function will show the notification
    onMessage(messaging, (payload) => {
      // console.log("Message received. ", payload);
      alert(payload.notification.title);
    });

    // if (saveToken !== "") {
    //   postData();
    // }
  }, [saveToken]);
  return (
    <>
      <ToastContainer />
      {/* <button onClick={postData}>Notify</button> */}
    </>
  );
}

export default App;
