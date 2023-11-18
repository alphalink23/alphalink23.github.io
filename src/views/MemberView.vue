<template>
  <div class="section bg-main text-white content">
    <div class="text-center mt-5 w-75 m-auto">
      <h1 class="display-5 w-75 m-auto fw-semibold">Members</h1>
    </div>

    <div class="row justify-content-center">
      <!-- Use v-for to iterate over rows -->
      <div v-for="(row, rowIndex) in members.length / 5" :key="rowIndex" class="row justify-content-center mt-5">
        <!-- Use v-for to iterate over members in the current row -->
        <div v-for="(member, colIndex) in members.slice(rowIndex * 5, (rowIndex + 1) * 5)" :key="colIndex" class="col-sm-2">
          <div class="card">
            <div class="card-body">
              <img :src="member.path" alt="">
              <!-- Display member information -->
              <h1 class="text-danger" stlye="margin-top: -20%">{{ member.nrp }}</h1>
              <h5 class="card-title">{{ member.name }}</h5>
              <p class="card-text">{{ member.jabatan }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { name: 'Muhammad Rafi Rizaldi', jabatan: 'Komting', nrp: 1, path: "../../public/assets/members/aldi.jpg"},
        { name: 'Bruhus', jabatan: 'Budak', nrp: 1, path: "../../public/assets/members/siapa.jpg"},
        { name: 'Bob Smith', jabatan: 'Budak', nrp: 2, path: "../../public/assets/members/"},
        { name: 'Alice Johnson', jabatan: 'Budak', nrp: 3, path: "../../public/assets/members/"},
        { name: 'Charlie Brown', jabatan: 'Budak', nrp: 4, path: "../../public/assets/members/"},
        { name: 'David Wilson', jabatan: 'Budak', nrp: 5, path: "../../public/assets/members/"},
        { name: 'Eva Miller', jabatan: 'Budak', nrp: 1, path: "../../public/assets/members/"},
        { name: 'Frank Robinson', jabatan: 'Budak', nrp: 1, path: "../../public/assets/members/"},
        { name: 'Grace Davis', jabatan: 'Budak', nrp: 1, path: "../../public/assets/members/"},
        { name: 'Henry Carter', jabatan: 'Budak', nrp: 1, path: "../../public/assets/members/"},
      ]
    };
  }
};
</script>
