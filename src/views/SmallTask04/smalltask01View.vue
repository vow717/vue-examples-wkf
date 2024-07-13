<script setup lang="ts">
import AddCourseComponent from './smalltask04View.vue'
import CourseListComponent from './smalltask02View.vue'
</script>

<template>
  <div>
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
  </div>
</template>
