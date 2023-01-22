const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
export const jobDuration =(startYear, endYear, startMonth, endMonth)=>{
    const date = new Date();
    const start = date.setMonth(startMonth - 1);
    const end = date.setMonth(endMonth - 1);
    return start;
}