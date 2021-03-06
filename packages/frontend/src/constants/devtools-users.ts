export const devtoolsUsers: Array<{ country_code: string, amount: number }> = [
  { country_code: 'FR', amount: 2200 },
  { country_code: 'RU', amount: 109 },
  { country_code: 'PE', amount: 1390 },
  { country_code: 'ID', amount: 692 },
  { country_code: 'CN', amount: 2366 },
  { country_code: 'UA', amount: 554 },
  { country_code: 'CN', amount: 136 },
  { country_code: 'CN', amount: 1837 },
  { country_code: 'KR', amount: 1611 },
  { country_code: 'TH', amount: 783 },
  { country_code: 'UA', amount: 1717 },
  { country_code: 'RU', amount: 1847 },
  { country_code: 'CO', amount: 540 },
  { country_code: 'ID', amount: 1765 },
  { country_code: 'PT', amount: 2235 },
  { country_code: 'IT', amount: 239 },
  { country_code: 'FR', amount: 685 },
  { country_code: 'PK', amount: 2237 },
  { country_code: 'PL', amount: 1317 },
  { country_code: 'NZ', amount: 326 },
  { country_code: 'RU', amount: 2416 },
  { country_code: 'CN', amount: 1482 },
  { country_code: 'TH', amount: 371 },
  { country_code: 'ID', amount: 1910 },
  { country_code: 'PT', amount: 1056 },
  { country_code: 'RU', amount: 227 },
  { country_code: 'MY', amount: 373 },
  { country_code: 'AR', amount: 1729 },
  { country_code: 'RU', amount: 956 },
  { country_code: 'SY', amount: 1806 },
  { country_code: 'BR', amount: 1987 },
  { country_code: 'CO', amount: 966 },
  { country_code: 'PH', amount: 598 },
  { country_code: 'CN', amount: 1371 },
  { country_code: 'LT', amount: 1279 },
  { country_code: 'RS', amount: 1094 },
  { country_code: 'ID', amount: 380 },
  { country_code: 'CN', amount: 144 },
  { country_code: 'CN', amount: 2060 },
  { country_code: 'PE', amount: 1057 },
  { country_code: 'ZA', amount: 1241 },
  { country_code: 'MW', amount: 2417 },
  { country_code: 'FI', amount: 622 },
  { country_code: 'RU', amount: 1344 },
  { country_code: 'ID', amount: 259 },
  { country_code: 'PL', amount: 537 },
  { country_code: 'NG', amount: 225 },
  { country_code: 'CN', amount: 732 },
  { country_code: 'CN', amount: 541 },
  { country_code: 'CN', amount: 1020 },
  { country_code: 'ID', amount: 277 },
  { country_code: 'CN', amount: 118 },
  { country_code: 'US', amount: 13 },
  { country_code: 'PT', amount: 1813 },
  { country_code: 'CU', amount: 2391 },
  { country_code: 'CN', amount: 837 },
  { country_code: 'PT', amount: 2008 },
  { country_code: 'ID', amount: 1281 },
  { country_code: 'CN', amount: 1350 },
  { country_code: 'US', amount: 631 },
  { country_code: 'CN', amount: 1523 },
  { country_code: 'VI', amount: 1590 },
  { country_code: 'CI', amount: 123 },
  { country_code: 'CN', amount: 1347 },
  { country_code: 'PL', amount: 744 },
  { country_code: 'FR', amount: 99 },
  { country_code: 'CN', amount: 2429 },
  { country_code: 'FI', amount: 1207 },
  { country_code: 'CN', amount: 2219 },
  { country_code: 'HN', amount: 1506 },
  { country_code: 'FR', amount: 1121 },
  { country_code: 'CN', amount: 2111 },
  { country_code: 'ID', amount: 677 },
  { country_code: 'ID', amount: 170 },
  { country_code: 'DE', amount: 965 },
  { country_code: 'CN', amount: 2080 },
  { country_code: 'MX', amount: 108 },
  { country_code: 'CN', amount: 140 },
  { country_code: 'NG', amount: 1550 },
  { country_code: 'BY', amount: 369 },
  { country_code: 'MX', amount: 2065 },
  { country_code: 'PT', amount: 2266 },
  { country_code: 'CA', amount: 10 },
  { country_code: 'ID', amount: 1618 },
  { country_code: 'CN', amount: 1647 },
  { country_code: 'HR', amount: 2005 },
  { country_code: 'SE', amount: 1214 },
  { country_code: 'CN', amount: 1432 },
  { country_code: 'PE', amount: 1774 },
  { country_code: 'CO', amount: 1742 },
  { country_code: 'CR', amount: 1812 },
  { country_code: 'AF', amount: 1620 },
  { country_code: 'ID', amount: 437 },
  { country_code: 'DO', amount: 304 },
  { country_code: 'FR', amount: 504 },
  { country_code: 'PL', amount: 2029 },
  { country_code: 'CN', amount: 2200 },
  { country_code: 'JP', amount: 412 },
  { country_code: 'CN', amount: 917 },
  { country_code: 'CN', amount: 1942 }
]

export const devtoolsUsersObject: Record<string, number> = devtoolsUsers.reduce<Record<string, number>>((obj, item) => {
  obj[item.country_code] = item.amount
  return obj
}, {})

export const devtoolsEvents = [
  { country: 'SI', amount: 9 },
  { country: 'PL', amount: 8 },
  { country: 'ID', amount: 4 },
  { country: 'NP', amount: 10 },
  { country: 'ID', amount: 5 },
  { country: 'RU', amount: 7 },
  { country: 'TH', amount: 9 },
  { country: 'ID', amount: 3 },
  { country: 'MA', amount: 3 },
  { country: 'ID', amount: 8 },
  { country: 'CN', amount: 5 },
  { country: 'CN', amount: 8 },
  { country: 'UA', amount: 7 },
  { country: 'PK', amount: 6 },
  { country: 'CN', amount: 1 },
  { country: 'CN', amount: 4 },
  { country: 'SN', amount: 9 },
  { country: 'BR', amount: 10 },
  { country: 'CN', amount: 2 },
  { country: 'ID', amount: 10 },
  { country: 'TH', amount: 3 },
  { country: 'UA', amount: 3 },
  { country: 'NC', amount: 2 },
  { country: 'FR', amount: 7 },
  { country: 'ID', amount: 6 },
  { country: 'PK', amount: 4 },
  { country: 'FR', amount: 5 },
  { country: 'CN', amount: 6 },
  { country: 'KZ', amount: 7 },
  { country: 'MA', amount: 6 },
  { country: 'RU', amount: 4 },
  { country: 'SE', amount: 8 },
  { country: 'ID', amount: 3 },
  { country: 'FR', amount: 3 },
  { country: 'SE', amount: 9 },
  { country: 'BF', amount: 6 },
  { country: 'PT', amount: 10 },
  { country: 'RU', amount: 7 },
  { country: 'GR', amount: 1 },
  { country: 'JP', amount: 7 },
  { country: 'SE', amount: 1 },
  { country: 'BR', amount: 6 },
  { country: 'PL', amount: 3 },
  { country: 'CZ', amount: 1 },
  { country: 'LB', amount: 9 },
  { country: 'SE', amount: 2 },
  { country: 'ID', amount: 2 },
  { country: 'IE', amount: 3 },
  { country: 'BR', amount: 6 },
  { country: 'FR', amount: 3 }
]

export const devtoolsEventsObject: Record<string, number> = devtoolsEvents.reduce<Record<string, number>>((obj, item) => {
  obj[item.country] = item.amount
  return obj
}, {})

export const users = [
  { username: 'grindarius', email: 'sgammidge0@tumblr.com', birthdate: '1991-07-13T15:24:23Z', role: 1 },
  { username: 'vkeepin1', email: 'ahairyes1@nbcnews.com', birthdate: '1993-07-06T07:49:45Z', role: 1 },
  { username: 'kraulstone2', email: 'pion2@msn.com', birthdate: '1994-12-25T05:32:20Z', role: 1 },
  { username: 'bbenting3', email: 'hakester3@webeden.co.uk', birthdate: '1997-06-30T13:56:57Z', role: 0 },
  { username: 'nespinos4', email: 'mtreen4@example.com', birthdate: '1996-05-14T22:55:18Z', role: 0 },
  { username: 'bscamel5', email: 'mhabishaw5@ft.com', birthdate: '1998-06-27T01:06:55Z', role: 1 },
  { username: 'jtogher6', email: 'isterzaker6@sphinn.com', birthdate: '1995-03-21T14:18:04Z', role: 0 },
  { username: 'jquinnell7', email: 'cmascall7@devhub.com', birthdate: '1997-04-28T11:03:53Z', role: 0 },
  { username: 'tlewerenz8', email: 'abourhill8@engadget.com', birthdate: '1999-03-29T04:34:10Z', role: 0 },
  { username: 'emaryman9', email: 'gdanilchev9@drupal.org', birthdate: '1998-05-04T14:27:30Z', role: 1 }
]

export const popularEventTypes: Record<string, number> = {
  business: 219,
  concert: 433,
  live: 27,
  musical: 90,
  technology: 13
}

export const transactionsPastSixMonths: Record<string, number> = {
  '2022-02-01': 499394823,
  '2022-01-01': 344553442,
  '2021-12-01': 233423443,
  '2021-11-01': 123434554,
  '2021-10-01': 113343556,
  '2021-09-01': 94793283
}

export const registrationsPastSixMonths: Record<string, number> = {
  '2022-02-01': 500,
  '2022-01-01': 660,
  '2021-12-01': 492,
  '2021-11-01': 345,
  '2021-10-01': 945,
  '2021-09-01': 354
}

export const eventsDatatable = [
  { title: 'BTS World Tour \'Love Yourself\'', place: 'Rajamangkala National', status: 'open', tickets: 89930, totaltickets: 168000 },
  { title: 'LIDO connect', place: 'Online Event', status: 'open', tickets: 22332, totaltickets: 54440 },
  { title: 'Sculpture Drive Thru', place: 'LIDO CONNECT Hall 1', status: 'closed', tickets: 3344, totaltickets: 33650 }
]

export const transactionsDataTable = [
  { username: 'ecowle0', time: '2021-01-06T03:38:02Z', seatId: 'fb4788c7-5c78-4e17-852f-f3cfdbfac8b8', status: 2 },
  { username: 'astanyard1', time: '2020-04-13T16:06:08Z', seatId: 'a2fe2014-e99f-4bdf-87f8-2a517f018dd5', status: 2 },
  { username: 'dstefi2', time: '2021-01-23T15:41:17Z', seatId: '3654a14a-9ac2-46c0-ae71-ab8ad1e89861', status: 2 },
  { username: 'enock3', time: '2021-11-01T10:53:50Z', seatId: '72cdf675-bfba-4771-8f2f-049b0305e9db', status: 1 },
  { username: 'aluxmoore4', time: '2021-02-25T12:56:19Z', seatId: 'a5a296f1-44e8-425a-9d90-a08bdc7e2c67', status: 2 },
  { username: 'klabbey5', time: '2022-01-31T16:25:50Z', seatId: '5ad4d873-69b0-4b79-9c3b-2baff6d7269c', status: 2 },
  { username: 'inelissen6', time: '2020-05-28T04:09:52Z', seatId: '5d9f998f-cbf7-49f6-8bd1-54719c7444e9', status: 2 },
  { username: 'nreal7', time: '2021-12-21T09:44:17Z', seatId: '1007d70d-afd7-4e2c-90b5-722cabc35384', status: 1 },
  { username: 'dcowlam8', time: '2022-01-31T09:46:13Z', seatId: 'a28555dc-680b-4625-a625-7c35c0a5ee34', status: 1 },
  { username: 'apiers9', time: '2021-07-18T22:18:28Z', seatId: '6eb38d07-9791-42eb-8e39-fbaa7fd1d731', status: 1 },
  { username: 'tobriana', time: '2021-12-29T13:37:54Z', seatId: '9d83df07-9fde-48c6-a080-a044e49a72d0', status: 2 },
  { username: 'gmccurlyeb', time: '2021-03-24T11:11:16Z', seatId: '4f5122d4-eab1-4e4a-922f-0e527bc31647', status: 0 },
  { username: 'bguitelc', time: '2020-06-19T14:56:04Z', seatId: '9e409a7a-16ea-466d-82c9-d12505ecc150', status: 0 },
  { username: 'vheatlied', time: '2020-04-22T05:03:47Z', seatId: '6aa6af86-2e89-4e8d-81e0-e11ca4f267ff', status: 1 },
  { username: 'drodrige', time: '2021-01-12T02:08:23Z', seatId: '12737a41-e3fd-4a8e-a4f3-c1d8f3f64fe6', status: 0 },
  { username: 'lmacgiollaf', time: '2020-10-25T21:18:55Z', seatId: '747984c8-86f7-499f-b837-a81da6df8f7d', status: 2 },
  { username: 'lshemeltg', time: '2021-02-16T09:10:59Z', seatId: 'd9dd171d-6447-460b-9407-1f4934c35ac9', status: 2 },
  { username: 'aebleh', time: '2021-07-05T08:35:31Z', seatId: '37db26df-d1d6-40ea-b57b-7022833f881a', status: 0 },
  { username: 'bovershotti', time: '2020-04-19T14:21:22Z', seatId: 'b1a04508-14d6-4be9-a4d1-4b4ec69308e7', status: 0 },
  { username: 'kbreytj', time: '2021-08-30T04:30:48Z', seatId: '52f55d83-2eef-41dc-b747-99c851c20a53', status: 0 },
  { username: 'ndelacostek', time: '2021-02-03T12:58:34Z', seatId: '46fe06a5-c23b-41d9-8794-1f9ceeb17518', status: 2 },
  { username: 'mtoothl', time: '2020-12-25T21:48:45Z', seatId: '2bd6fde5-63be-4a76-9204-4c33e4c1ed5f', status: 0 },
  { username: 'kskoulingm', time: '2021-06-12T12:26:21Z', seatId: '1cfc731b-def2-439a-b762-1da64f2d8994', status: 0 },
  { username: 'cbeavenn', time: '2021-10-02T10:52:03Z', seatId: '32bc7a96-a0de-40fd-bcde-1a02f40b0536', status: 2 },
  { username: 'mwillavizeo', time: '2020-10-03T05:16:40Z', seatId: 'c4bfe8c8-1731-41fc-a941-2c86425fe232', status: 1 },
  { username: 'lkernockp', time: '2021-03-01T07:21:19Z', seatId: '030eec87-d253-4faa-91da-f063147c1432', status: 0 },
  { username: 'rmchardyq', time: '2021-05-21T16:43:29Z', seatId: 'd514e0d3-0809-46a9-893c-3f868fb79565', status: 1 },
  { username: 'bhopkynsr', time: '2021-03-16T08:09:44Z', seatId: '6947ad2a-e827-4b35-b20d-e8119cf97a57', status: 1 },
  { username: 'krendells', time: '2020-02-01T20:47:06Z', seatId: '951010b4-e892-4f8c-a69e-5bac53366146', status: 1 },
  { username: 'scivitillot', time: '2020-03-16T15:25:55Z', seatId: '5bc3f1ff-06f6-443f-b0ff-7b1c26e6f98f', status: 2 },
  { username: 'mcoreu', time: '2020-02-02T10:25:48Z', seatId: '355943aa-9a2c-4ea2-a299-a2266ce12992', status: 0 },
  { username: 'raylottv', time: '2021-12-16T11:43:13Z', seatId: '53d0c10f-dc9e-4f65-b0c7-0b74aefe5a55', status: 2 },
  { username: 'mpanchinw', time: '2021-06-21T12:02:32Z', seatId: 'fd6afb4f-89a9-45dc-ae06-1e19b5d06ccd', status: 2 },
  { username: 'bgradyx', time: '2022-01-08T08:25:22Z', seatId: '66cd85af-d86c-474c-be91-370a8c9f2989', status: 1 },
  { username: 'hhecky', time: '2022-01-28T05:14:16Z', seatId: '553ba759-a742-4a36-acf6-b2c008025ce6', status: 0 },
  { username: 'shellinz', time: '2021-06-07T01:56:47Z', seatId: '4966ee84-5901-4873-888a-e6af8a7e1ea5', status: 1 },
  { username: 'ccolquite10', time: '2021-12-30T09:17:45Z', seatId: 'c1830c14-3912-4b7c-a65d-d25602236436', status: 1 },
  { username: 'asearston11', time: '2021-06-06T02:38:39Z', seatId: 'd9135041-f218-4aa8-89b7-8e6ff5d8ea1c', status: 1 },
  { username: 'pmclese12', time: '2021-09-12T11:17:02Z', seatId: '98a5ef79-dae9-4c7c-a59c-abb9395ab095', status: 1 },
  { username: 'hfreemantle13', time: '2020-12-24T16:21:29Z', seatId: '327bb900-1086-45c3-9f54-bd8de91d5643', status: 0 },
  { username: 'kcounsell14', time: '2020-12-12T22:13:47Z', seatId: '2a580752-e91f-4a8c-805f-fb76c4ac0e95', status: 2 },
  { username: 'mhecks15', time: '2020-05-16T00:32:42Z', seatId: 'c03f46a5-b81d-4640-8278-ba28d7e1b6e4', status: 0 },
  { username: 'dweeden16', time: '2020-10-28T05:35:07Z', seatId: '2139b9e3-421f-49ce-bb4c-caa0a6262761', status: 1 },
  { username: 'esexton17', time: '2021-05-08T03:04:33Z', seatId: '97b2372a-a0fe-4fe9-a983-58cccd8ba110', status: 0 },
  { username: 'eraise18', time: '2020-09-09T06:16:21Z', seatId: '8a60c19c-0497-4aaa-8954-dde0cfe3c634', status: 1 },
  { username: 'ktritton19', time: '2020-08-24T01:12:49Z', seatId: '86b2fa64-a99b-4852-b9a7-995a905ebe44', status: 0 },
  { username: 'hworman1a', time: '2020-12-02T15:55:00Z', seatId: 'c5c683ab-5e67-4552-972f-790383dfa2dd', status: 0 },
  { username: 'vglas1b', time: '2021-03-08T20:35:02Z', seatId: 'c67b230c-619e-4576-8dee-cf0c972a906e', status: 0 },
  { username: 'jcollar1c', time: '2021-11-27T18:35:40Z', seatId: '70e34acb-9560-4c4c-93aa-96a752c21c88', status: 2 },
  { username: 'gregorz1d', time: '2020-07-11T13:30:11Z', seatId: '33d8acb4-b259-469c-a95d-76de425082ec', status: 0 }
].map(t => {
  return {
    username: t.username,
    time: t.time,
    seatId: t.seatId.replace(/-/g, '').slice(0, 21),
    status: t.status
  }
})
