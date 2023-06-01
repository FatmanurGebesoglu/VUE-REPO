<template>
    <form @submit.prevent="handleSubmit">
        <label>Hobiler</label>
        <input type="text" v-model="aktifHobi" @keyup.alt="hobiEkle" />
        <div v-for="hobi in hobiler" :key="hobi">
            <span @click="hobiSil(hobi)">{{ hobi }}</span>
        </div>
        <button >Submit</button>
        <button @click.prevent="handleSubmit" >Submit Click ile</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            hobiler: [],
            aktifHobi: ''

        }
    },
    methods: {
        hobiEkle($event) {
            // console.log($event.key);
            if ($event.key === ',' && this.aktifHobi) {
                if (!this.hobiler.includes(this.aktifHobi)) {
                    this.hobiler.push(this.aktifHobi)
                }
                this.aktifHobi = ''
            }
        },
        hobiSil(hobi) {
            this.hobiler = this.hobiler.filter(item => {
                return hobi !== item
            })
        },
        handleSubmit() {
            console.log(this.hobiler);
        }
    }
}

</script>

<style></style>