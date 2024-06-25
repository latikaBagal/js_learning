function bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
  const yesBank= new bank("Yes Bank","Wakad","YES000889",7900);
  console.log(`Yes Bank Details: ${yesBank.bankName},${yesBank.location},${yesBank.ifscCode},${yesBank.branchCode}`);
  const sbiBank= new bank("Sbi Bank","Akluj","SBIN0000305",5943);
  console.log(`Sbi Bank Details: ${sbiBank.bankName},${sbiBank.location},${sbiBank.ifscCode},${sbiBank.branchCode}`);
  const mahBank= new bank("Mah Bank","Pandharpur","MAHB0000237",3124);
  console.log(`Mah Bank Details: ${mahBank.bankName},${mahBank.location},${mahBank.ifscCode},${mahBank.branchCode}`);
  const axisBank= new bank("Axis Bank","Indapur","UTIB0001612",5634);
  console.log(`Axis Bank Details: ${axisBank.bankName},${axisBank.location},${axisBank.ifscCode},${axisBank.branchCode}`);

  bank.prototype.opentime= "9 AM IST";
  bank.prototype.closetime= "6 PM IST";
  console.log("--------------------------------------------------------------------------------");
  console.log(`Sbi Bank Open Time:${sbiBank.opentime} And It's Close Time:${sbiBank.closetime}`);
  console.log("---------------------------------------------------------------------------------");
  console.log(`Bank name is:${axisBank.bankName} And It's Close Time:${axisBank.closetime}`);
  console.log("----------------------------------------------------------------------------------");
  console.log(`Bank name is:${yesBank.bankName} Branch Code:${yesBank.branchCode},And It's Open Time is:${yesBank.opentime} `);
