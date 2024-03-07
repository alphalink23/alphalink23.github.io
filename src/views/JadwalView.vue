<template>
  <div class="bg-main text-white content">
    <div>
      <div class="text-center w-75 m-auto mt-5">
        <h1 class="display-5 w-75 m-auto fw-semibold">Jadwal</h1>
        <p class="text-primary fw-bold fs-4">
          Jadwal pelajaran kelas D4 IT A '23
        </p>
        <div class="hero-height-filler w-100">
          <br />
        </div>
      </div>
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-12">
            <div
              class="container text-white d-flex flex-column align-items-center"
            >
              <table class="table table-responsive table-light align-middle">
                <thead>
                  <tr>
                    <th scope="col">Hari</th>
                    <th scope="col">No.</th>
                    <th scope="col">Jam</th>
                    <th scope="col">Ruangan</th>
                    <th scope="col">Mata Kuliah</th>
                    <th scope="col">Dosen</th>
                    <th scope="col">PJ</th>
                  </tr>
                </thead>
                <tbody>
                  <template
                    v-for="(schedules, day, sindex) in scheduleDictionary"
                    :key="day"
                  >
                    <tr
                      :class="{ 'table-active': isCurrentDay(sindex) }"
                      v-for="(schedule, index) in schedules"
                      :key="index"
                    >
                      <template v-if="index === 0">
                        <td :rowspan="schedules.length">
                          {{ day }}
                        </td>
                      </template>
                      <td>{{ index + 1 }}</td>
                      <td>{{ schedule.time }}</td>
                      <td>{{ schedule.room }}</td>
                      <td>{{ schedule.subject }}</td>
                      <td>{{ schedule.teacher }}</td>
                      <td>{{ schedule.pj }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const scheduleDictionary = {
  Senin: [
    {
      time: "08.00 - 10.30",
      room: "C 206",
      subject: "ASD",
      teacher: "Bu Umi",
      pj: "Aldi",
    },
    {
      time: "13.00 - 14.40",
      room: "Working Space",
      subject: "ASD",
      teacher: "Bu Umi",
      pj: "Aldi",
    },
  ],
  Selasa: [
    {
      time: "*09.40 - 11.20",
      room: "Theater D3",
      subject: "Kewarganegaraan",
      teacher: "Pak Indra Aji",
      pj: "Adrian",
    },
    {
      time: "13.00 - 17.10",
      room: "C-303",
      subject: "Prak. Pemrograman Web",
      teacher: "Pak Nayla",
      pj: "Bu Muarifin",
    },
  ],
  Rabu: [
    {
      time: "08.00 - 10.30",
      room: "C-206",
      subject: "Prak. ASD",
      teacher: "Bu Umi",
      pj: "Aldi",
    },
    {
      time: "12.00 - 13.00",
      room: "B-201",
      subject: "Basis Data",
      pj: "Salma",
      teacher: "Bu Tessy",
    },
    {
      time: "13.50 - 15.30",
      room: "B-305",
      subject: "Sistem Operasi",
      teacher: "Pak Iwan Syarif",
      pj: "Bu Tessy",
    },
  ],
  Kamis: [
    {
      time: "08.00 - 10.30",
      room: "C-307",
      subject: "Prak. Sistem Operasi",
      pj: "Alif",
      teacher: "Pak Rosyid",
    },
    {
      time: "10.30 - 13.00",
      room: "C-105",
      subject: "Prak. Basis Data",
      pj: "Salma",
      teacher: "Bu Tessy",
    },
  ],
  Jumat: [
    {
      time: "08.00 - 09.40",
      room: "HH-106B",
      subject: "Mat 2",
      teacher: "Bu Ira",
      pj: "Nanda",
    },
  ],
};

function isCurrentDay(day) {
  const today = new Date().getDay() - 1;
  return day === today;
}
</script>
