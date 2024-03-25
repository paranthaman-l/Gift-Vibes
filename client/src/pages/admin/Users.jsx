import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import AdminService from '../../services/AdminService';

const Users = () => {
    const [users,setUsers] = useState();
    const getUsers = async ()=>{
        await AdminService.GetAllCustomers().then((response)=>{
            setUsers(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }
    useEffect(() => {
        getUsers();
    }, [])
    

    const TABLE_HEAD = ["User","No of Orders", "Joined", ""];

  

    return (
        <div className='px-10 w-3/4 h-[650px] overflow-y-scroll overflow-x-hidden font-grotesk'>
            <p className='text-4xl font-semibold tracking-wider text-textGray'>Users</p>

            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Users list
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all members
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <div className="w-full md:w-72">
                                <Input
                                    label="Search"
                                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                />
                            </div>
                            <Button variant="outlined" size="sm">
                                view all
                            </Button>
                            {/* <Button className="flex items-center gap-3" size="sm">
                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
                            </Button> */}
                        </div>
                    </div>

                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map(
                                (user, index) => {
                                    const isLast = index === users.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={user?.cid}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar src={user?.profile} alt={name} size="sm" />
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {user?.user?.name}
                                                        </Typography>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal opacity-70"
                                                        >
                                                            {user?.user?.email}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="w-max">
                                                    <Typography>
                                                        {user?.orders.length}
                                                    </Typography>
                                                </div>
                                            </td> 
                                            {/* <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {job}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {org}
                                                    </Typography>
                                                </div>
                                            </td> */}
                                            {/* <td className={classes}>
                                                <div className="w-max">
                                                    <Chip
                                                        variant="ghost"
                                                        size="sm"
                                                        value={online ? "online" : "offline"}
                                                        color={online ? "green" : "blue-gray"}
                                                    />
                                                </div>
                                            </td> */}
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {user?.user?.createdAt}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        <PencilIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page 1 of 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Users