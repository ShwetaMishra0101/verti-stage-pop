// export async function withdraw(accoundId:string, amount:number):Promise<void> {

//     console.log(`Withdrawn ${amount} from ${accoundId}`);
    
// }

// export async function deposit(accoundId:string, amount:number):Promise<void>{
//     console.log(`Deposited ${amount} into ${accoundId}`);
// }


// import { proxyActivities } from '@temporalio/workflow';
// // import type * as activities from './activities';

// const { withdraw, deposit } =  proxyActivities<typeof activities >({
//     startToCloseTimeout : "1 min "
// })

// export async function transferMoneyWorkflow(
//     fromId: string,
//     toId: string,
//     amount: number
//   ): Promise<string> {
//     await withdraw(fromId, amount);
//     await deposit(toId, amount);
    
//     return `Successfully transferred $${amount} from ${fromId} to ${toId}`;
//   }

  const arr =[1,2,3,4,5,6];
  console.log(Set(arr))

