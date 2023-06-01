<template>
    <form>
        <label>Hobiler</label>
        <input type="text" v-model="aktifHobi" @keyup.alt="hobiEkle" />
        <div v-for="hobi in hobiler" :key="hobi">
            {{ hobi }}
        </div>
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
        }
    }
}

</script>

<style></style>