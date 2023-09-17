import CreateCollection from 0x01

transaction { 
    prepare(acct: AuthAccount) {

        let collection <- CreateCollection.createEmptyCollection()

        // store the empty NFT Collection in account storage
        acct.save<@CreateCollection.Collection>(<-collection, to: CreateCollection.CollectionStoragePath)

        log("Collection created for account 2")

        // create a public capability for the Collection
        acct.link<&{CreateCollection.NFTReceiver}>(CreateCollection.CollectionPublicPath, target: CreateCollection.CollectionStoragePath)

        log("Capability created")
    }
}