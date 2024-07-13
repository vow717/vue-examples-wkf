<script lang="ts" setup>
import AddCourseComponent from './smalltask04View.vue'
import CourseListComponent from './smalltask02View.vue'
</script>
<template>
  <Suspense>
    <template #default>
      <AddCourseComponent />
    </template>
  </Suspense>
  <hr />
  <Suspense>
    <template #default>
      <CourseListComponent />
    </template>
  </Suspense>
</template>
