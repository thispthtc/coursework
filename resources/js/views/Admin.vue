<template>
    <section class="admin-page">
        <Header/>
        <Container>
            <div class="admin-inner">
                <div class="auth">
                    <form action="">
                        <TitleSection class="admin-title" title="SIGN IN"/>

                        <div class="login">
                            <label for="">Login</label>
                            <input type="text">
                        </div>

                        <div class="password">
                            <label for="">password</label>
                            <input type="password">
                        </div>

                        <button class="admin-btn">sign in</button>
                    </form>
                </div>
            </div>
        </Container>
    </section>
</template>

<script>
import Container from "@/components/Container.vue";
import Header from "../components/section/Header.vue"
import TitleSection from "@/components/UI/TitleSection.vue";

export default {
    components: {TitleSection, Container, Header}
}
</script>

<style>
    .admin-page {
        background: #006060;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .admin-page .nav-link {
        color: white;
    }

    .admin-inner {
        height: 800px;
        display: flex;
    }

    .auth {
        width: 1000px;
        margin: 100px auto;
        background: rgba(196, 196, 196, 0.5);
        border: 4px solid #FFFFFF;
        box-shadow: inset 0 4px 16px rgba(233, 233, 233, 0.2), inset 0 1px 40px rgba(226, 226, 226, 0.2), inset 0 -80px 65px rgba(212, 212, 212, 0.2);
        backdrop-filter: blur(25px);
        border-radius: 50px;
        position: relative;
    }

    .auth form {
        position: absolute;
        width: 500px;
        top: 25%;
        left: 25%;
    }

    .login, .password {
        display: flex;
    }

    .password {
        margin-top: 10px;
    }

    .login label, .password label {
        font-size: 24px;
        text-transform: uppercase;
        background: #006060;
        color: white;
        padding: 10px 20px;
        font-family: Raleway, sans-serif;
        font-weight: bold;
        border-radius: 5px 0 0 5px;
    }

    .login input, .password input {
        color: #006060;
        font-size: 20px;
        padding: 5px 10px;
        border-radius: 0 5px 5px 0;
        border: 3px solid #006060;
        font-family: Raleway, sans-serif;
    }

    .auth input {
        width: 100%;
    }

    .admin-btn {
        width: 100%;
        margin-top: 10px;
        padding: 10px 0;
        font-size: 20px;
        border-radius: 5px;
        text-transform: uppercase;
        font-weight: bold;
        color: #006060;
        background: white;
        border: none;
        cursor: pointer;
        transition: all .1s linear;
        outline: 3px solid #006060;

    }

    .admin-btn:hover {
        outline: none;
        transition: all .1s linear;
    }

    .admin-title {
        color: white;
        letter-spacing: 0;
        margin-bottom: 20px;
    }
</style>
