<template>
  <div class="purchase-history-page">
    <h1 class="page-header">
      Purchase History
    </h1>
    <div class="flex flex-col mt-8">
      <div class="setting-header">
        <div class="header-box">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="box-bg">
                  Name
                </th>
                <th class="box-bg">
                  Title
                </th>
                <th class="box-bg">
                  Status
                </th>
                <th class="box-bg">
                  Price
                </th>
              </tr>
            </thead>
            <tbody class="bg-pale-yellow">
              <tr>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full" src="@/assets/user.png" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-pale-gray">
                        Bhattarapong Somwong
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        Bhattarapongs@nu.ac.th
                      </div>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="text-sm leading-5 text-pale-gray">
                    BTS World Tour 'Love Yourself'
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    Rajamangkala National
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <span class="active-setting">Ready to roll</span>
                </td>
                <td class="py-4 px-6 text-sm leading-5 border-b whitespace-no-wrap border-pale-gray text-pale-gray">
                  1000
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full" src="@/assets/user.png" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-pale-gray">
                        Bhattarapong Somwong
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        Bhattarapongs@nu.ac.th
                      </div>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="text-sm leading-5 text-pale-gray">
                    Re-MSC: Reconnecting with Mi
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    Online Event
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <span class="active-setting">Ready to roll</span>
                </td>
                <td class="py-4 px-6 text-sm leading-5 border-b whitespace-no-wrap border-pale-gray text-pale-gray">
                  1000
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full" src="@/assets/user.png" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-pale-gray">
                        Bhattarapong Somwong
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        Bhattarapongs@nu.ac.th
                      </div>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="text-sm leading-5 text-pale-gray">
                    LIDO CONNECT - Movie Program
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    LIDO CONNECT Hall 1
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <span class="active-setting">Ready to roll</span>
                </td>
                <td class="py-4 px-6 text-sm leading-5 border-b whitespace-no-wrap border-pale-gray text-pale-gray">
                  1000
                </td>
              </tr>
              <tr>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full" src="@/assets/user.png" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium leading-5 text-pale-gray">
                        Bhattarapong Somwong
                      </div>
                      <div class="text-sm leading-5 text-gray-500">
                        Bhattarapongs@nu.ac.th
                      </div>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <div class="text-sm leading-5 text-pale-gray">
                    Sculpture Drive Thru
                  </div>
                  <div class="text-sm leading-5 text-gray-500">
                    Day Day Ari, Ari Samphan Soi 5
                  </div>
                </td>
                <td class="py-4 px-6 border-b whitespace-no-wrap border-pale-gray">
                  <span class="active-setting">Ready to roll</span>
                </td>
                <td class="py-4 px-6 text-sm leading-5 border-b whitespace-no-wrap border-pale-gray text-pale-gray">
                  1000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'purchase-history'
})
</script>

<style scoped lang="scss">
.page-header {
  @apply text-4xl font-semibold text-white;
}

.box-bg {
  @apply py-3 px-6 text-xs font-medium tracking-wider leading-4 text-left uppercase border-b border-pale-gray bg-pale-yellow text-pale-gray;
}

.header-box {
  @apply inline-block overflow-hidden min-w-full align-middle border-b shadow sm:rounded-lg border-pale-gray;
}

.setting-header {
  @apply overflow-x-auto py-2 -my-2 sm:px-6 sm:-mx-6 lg:px-8 lg:-mx-8;
}

.active-setting {
  @apply inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full;
}
</style>
