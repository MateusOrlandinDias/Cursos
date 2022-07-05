import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl57bceuh4fcd01ueaydr7l41/master',
    cache: new InMemoryCache()
})