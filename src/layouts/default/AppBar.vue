<template>
  <v-navigation-drawer>
    <template #prepend>
      <!-- <div class="pa-2"><v-img src="../../assets/logo.jpg " size></v-img></div> -->
    </template>
    <template #append>
      <v-btn text="Log out"></v-btn>
    </template>
    <v-list nav>
      <v-list-item
        v-for="item in navigationItems"
        :key="item.title"
        :prepend-icon="item.icon"
        :title="item.title"
        link
      />
    </v-list>
  </v-navigation-drawer>
  <v-app-bar flat>
    <v-app-bar-title> Dashboard  </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
const navigationItems = [
  { title: "Dashboard", icon: "mdi-view-dashboard" },
  { title: "Students", icon: "mdi-account-school" },
  { title: "Teachers", icon: "mdi-human-male-board-poll" },
  { title: "Parents", icon: "mdi-account-group" },
  { title: "Account", icon: "mdi-briefcase-account" },
  { title: "Class", icon: "mdi-human-male-board-poll" },
  { title: "Exam", icon: "mdi-clipboard-edit" },
  { title: "Transport", icon: "mdi-bus" },
  { title: "Notice", icon: "mdi-bulletin-board" },
];
</script>
