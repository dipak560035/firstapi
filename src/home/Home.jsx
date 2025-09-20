import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@heroui/react";
import { useDispatch, useSelector } from "react-redux"

import RemoveUser from "../users/RemoveUser";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const { users } = useSelector((state) => state.userSlice);
  const nav = useNavigate();



  return (
    <div className="p-5 grid grid-cols-2 ">

      {users.map((user,i) => {
        return <Card key={user.id}  className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{user.username}</p>
              <p className="text-small text-default-500">{user.email}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{user.description}</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between">
            <div className="flex gap-3">
          <p>{user.country}</p>
          <p>{user.gender}</p>

            </div>
             <div className="flex gap-3 px-3">
                    <Button onPress={()=>nav(`/edit-user/${user.id}`)}isIconOnly aria-label="Like" color="secondary">
                      <i className="fa-solid fa-pen-to-square"></i>
                      </Button>
            
                   <RemoveUser index={i} />
            </div>
        


          </CardFooter>
        </Card>

      })}

    </div>
  )
}