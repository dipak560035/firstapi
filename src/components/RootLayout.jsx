

// import { Outlet } from "react-router-dom";
// import Header from "./Header";

// export default function RootLayout() {
//   return (
//     <div>
//         <Header />
//         <Outlet/>
        
//     </div>
//   )
// }


// src/components/RootLayout.jsx
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Outlet /> {/* This is where nested routes like Home or UserAdd will appear */}
      </main>
    </div>
  );
}


