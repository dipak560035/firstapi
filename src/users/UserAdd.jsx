// import { Button, Form, Input } from "@heroui/react";

// export default function UserAdd() {
//   return (
//     <div className="p-5">
//       <Form className="flex flex-col gap-4 max-w-xs w-full">
//         <Input
//           label="Username"
//           labelPlacement="outside"
//           name="username"
//           placeholder="Enter your username"
//           type="text"
//         />
//         <Input
//           label="Email"
//           labelPlacement="outside"
//           name="email"
//           placeholder="Enter your email"
//           type="email"
//         />
//         <div className="flex gap-2">
//           <Button color="primary" type="submit">
//             Submit
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// }




import { Button, Form, Input } from "@heroui/react";

export default function UserAdd() {
  return (
    <div className="p-6">
      <Form className="w-full max-w-sm flex flex-col gap-4">
        <Input
          label="Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your username"
          type="text"
        />

        <Input
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <div className="flex gap-3">
          <Button color="primary" type="submit">
            Submit
          </Button>
          <Button color="secondary" variant="flat">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
