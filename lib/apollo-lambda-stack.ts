import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigw from '@aws-cdk/aws-apigateway'
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs'
export class ApolloLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const hello = new NodejsFunction(this, 'apollo-hello' ,{
      entry: 'lambda/apollo/hello.ts',
      runtime: lambda.Runtime.NODEJS_14_X,
      description: 'GraphQL Apollo Server'
    })

    new apigw.LambdaRestApi(this, 'apollo-graphql-api', {
      handler: hello,
    })
  }
}
