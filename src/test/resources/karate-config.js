function init() {
    var env = karate.env;
    karate.log('karate.env environment selected is: ', env);

    if (!env) {
        env = 'local';
    }

    var config = {
        env: env,
        clientId: 'karate-spring-demo',
        clientSecret: '19f745ce-5452-467f-bad8-ee14184240e5',
        oauth2Url: 'http://ocalhost:8080/auth/realms/karate-spring-demo-realm/protocol/openid-connect/token',
        apiBaseUrl: 'http://localhost:8080/api'
    };

    if (env == 'dev') {
        config.clientId= 'karate-spring-demo',
        config.clientSecret= '29f745af-5452-487f-bad8-ee14354141a9',
        config.oauth2Url= 'http://X.Y.Z.D:8180/auth/realms/karate-spring-demo-realm/protocol/openid-connect/token',
        config.apiBaseUrl= 'http://X.Y.Z.D:8080/api'
    }
    else if (env == 'R7') {
        //...
    }else if (env == 'prod') {
        //...
    }

    return config;
}