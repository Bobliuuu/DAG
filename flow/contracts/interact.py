from flow_py_sdk import flow_client, ProposalKey, Tx, Script

async def run(self, ctx: Config):
        async with flow_client(
                host=ctx.access_node_host, port=ctx.access_node_port
        ) as client:
            acc = await client.get_account(address=self.account_address)
            acc_addr = self.account_address
            sig = ctx.service_account_signer
            blk = await client.get_latest_block()
            proposer = await client.get_account_at_latest_block(
                address=account_address.bytes
            )

            transaction = Tx(
                code=r"""import ExampleNFT from 0x01

// This transaction allows the Minter account to mint an NFT
// and deposit it into its collection.

transaction {

    // The reference to the collection that will be receiving the NFT
    let receiverRef: &{ExampleNFT.NFTReceiver}

    prepare(acct: AuthAccount) {
        // Get the owner's collection capability and borrow a reference
        self.receiverRef = acct.getCapability<&{ExampleNFT.NFTReceiver}>(ExampleNFT.CollectionPublicPath)
            .borrow()
            ?? panic("Could not borrow receiver reference")
    }

    execute {
        let newNFT <- ExampleNFT.mintNFT()

        self.receiverRef.deposit(token: <-newNFT)

        log("NFT Minted and deposited to Account 1's Collection")
    }
}"""
,
                reference_block_id=latest_block.id,
                payer=account_address,
                proposal_key=ProposalKey(
                    key_address=acc_addr,
                    key_id=0,
                    key_sequence_number=proposer.keys[0].sequence_number,
                ),
            ).add_arguments(self.receiver_address, self.metadata).add_authorizers(account_address).with_envelope_signature(
                acc_addr,
                0,
                sig,
            )

            transaction_id = response.id

        transaction = await client.get_transaction(id=transaction_id)
        