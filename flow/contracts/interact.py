from flow_py_sdk import flow_client, ProposalKey, Tx, Script

async def run(self, ctx: Config):
        async with flow_client(
                host=ctx.access_node_host, port=ctx.access_node_port
        ) as client:
            acc = await client.get_account(address=self.account_address)
            account_address = self.account_address
            new_signer = ctx.service_account_signer
            latest_block = await client.get_latest_block()
            proposer = await client.get_account_at_latest_block(
                address=account_address.bytes
            )

            transaction = Tx(
                code=r"""