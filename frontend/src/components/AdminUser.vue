<template>
<tr>
    <td class="userID">{{user.userID}}</td>
    <td class="firstName">{{user.firstName}}</td>
    <td class="lastName">{{user.lastName}}</td>
    <td class="age">{{user.userAge}}</td>
    <td class="gender">{{user.gender}}</td>
    <td class="userRole">{{user.userRole}}</td>
    <td class="emailAdd">{{user.emailAdd}}</td>
    <td class="userPass">{{user.userPass}}</td>
    <td><img :src="user.userProfile" alt=""></td>
    <!-- <td>{{user.userProfile}}</td> -->
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
                window.location.reload();
            }
            catch(err){
                alert(err)
            }
        }
    }
}
</script>

<style scoped>
tr, td{
    border: 3px solid black;
}

td{
    padding: 0.1%;
}

table{
    width: 100%;
    border-radius: 30px;
}

img{
    width: 50px;
    height: 50px;
}

.userID{
    width: 5%;
}

.firstName, .lastName{
    width: 8%;
}

.age{
    width: 3%;
}


</style>