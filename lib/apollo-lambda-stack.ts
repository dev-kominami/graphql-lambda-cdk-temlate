import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
export class ApolloLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda.Function(this, 'apollo-hello', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'apollo/hello.handler',
      code: lambda.Code.fromAsset('lambda')
    })  
  }
}
