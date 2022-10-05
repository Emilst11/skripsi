import React, {useEffect} from "react";
import UserList from "../components/UserList";
import MainLayout from "../layouts/MainLayout";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../store/actions/record";

const Users = () => {
    const dispatch = useDispatch()
    const { user_list } = useSelector(state => state.records)

    useEffect(() => {
        dispatch(getUserList())
    }, [])

    return(
        <MainLayout>
            {user_list && 
                user_list.data.map((item, index) => 
                    <UserList key={index} number={index} data={item}/>
                )
            }
        </MainLayout>
    )
}

export default Users