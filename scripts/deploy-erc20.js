async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
    "Deploying contracts with the account:",
    deployer.address
    );
    console.log("Account balance:", (await
    deployer.getBalance()).toString());
    const erc20Basic = await
    ethers.getContractFactory("ERC20Basic");
    const deployedContract = await
    erc20Basic.deploy(100000000);
    console.log("Deployed ERCC20 contract address:",
    deployedContract.address);
    }
    main()
    .then(() => process.exit(0))
    .catch(error => {
    console.error(error);
    process.exit(1);
    });
    