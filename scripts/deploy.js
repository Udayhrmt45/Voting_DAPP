async function main() {
    const Voting = await ethers.getContractFactory("Voting");
  
    // Start deployment, returning a promise that resolves to a contract object
    const Voting_ = await Voting.deploy(["Mark", "Mike", "Henry", "Rock"], 90);
    await Voting_.waitForDeployment();
    const address = await Voting_.getAddress();
    console.log(`Voting deployed to: ${address}`);
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });