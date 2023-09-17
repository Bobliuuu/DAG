import flow_py_sdk

async def run(self, ctx: Config):
    async with flow_client(
            host=ctx.access_node_host, port=ctx.access_node_port
    ) as client:
        account_address, _, new_signer = await random_account(
            client=client, ctx=ctx
        )
        latest_block = await client.get_latest_block()
        proposer = await client.get_account_at_latest_block(
            address=account_address.bytes
        )

        transaction = Tx(
            code="""transaction(){prepare(){log("OK")}}""",
            reference_block_id=latest_block.id,
            payer=account_address,
            proposal_key=ProposalKey(
                key_address=account_address,
                key_id=0,
                key_sequence_number=proposer.keys[0].sequence_number,
            ),
        ).with_envelope_signature(
            account_address,
            0,
            new_signer,
        )

        response = await client.send_transaction(transaction=transaction.to_signed_grpc())

        transaction_id = response.id

        transaction = await client.get_transaction(id=transaction_id)
        print("transaction ID: {}".format(transaction_id.hex()))
        print("transaction payer: {}".format(transaction.payer.hex()))
        print(
            "transaction proposer: {}".format(
                transaction.proposal_key.address.hex()
            )
        )
        print("transaction script: {}".format(transaction.script.decode("utf-8")))
