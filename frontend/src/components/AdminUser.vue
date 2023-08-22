<template>
<tr>
    <td>{{user.userID}}</td>
    <td>{{user.firstName}}</td>
    <td>{{user.lastName}}</td>
    <td>{{user.userAge}}</td>
    <td>{{user.gender}}</td>
    <td>{{user.emailAdd}}</td>
    <td>{{user.userPass}}</td>
    <td>{{user.userProfile}}</td>
    <td>
        <div>
            <router-link :to="{name: 'update user', params: {id: user.userID}}">
                <button>Edit</button>
            </router-link>
            <button @click="deleteUser(user.userID)">Delete</button>
        </div>
    </td>
</tr>
</template>

<script>
import axios from 'axios'

export default{
    props: [
        "user"
    ], 
    methods: {
        async deleteUser(id){
            try{
                await axios.delete(`https://puzzles-deli.onrender.com/user/${id}`)
                this.$store.dispatch("fetchUsers")
            }
            catch(err){
                alert(err)
            }
        }
    }
}