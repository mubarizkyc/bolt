/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";

/**
 * @category Instructions
 * @category Apply
 * @category generated
 */
export interface ApplyInstructionArgs {
  args: Uint8Array;
}
/**
 * @category Instructions
 * @category Apply
 * @category generated
 */
export const applyStruct = new beet.FixableBeetArgsStruct<
  ApplyInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["args", beet.bytes],
  ],
  "ApplyInstructionArgs"
);
/**
 * Accounts required by the _apply_ instruction
 *
 * @property [] componentProgram
 * @property [] boltSystem
 * @property [_writable_] boltComponent
 * @category Instructions
 * @category Apply
 * @category generated
 */
export interface ApplyInstructionAccounts {
  componentProgram: web3.PublicKey;
  boltSystem: web3.PublicKey;
  boltComponent: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
}

export const applyInstructionDiscriminator = [
  248, 243, 145, 24, 105, 50, 162, 225,
];

/**
 * Creates a _Apply_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Apply
 * @category generated
 */
export function createApplyInstruction(
  accounts: ApplyInstructionAccounts,
  args: ApplyInstructionArgs,
  programId = new web3.PublicKey("WorLD15A7CrDwLcLy4fRqtaTb9fbd8o8iqiEMUDse2n")
) {
  const [data] = applyStruct.serialize({
    instructionDiscriminator: applyInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.componentProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.boltSystem,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.boltComponent,
      isWritable: true,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
