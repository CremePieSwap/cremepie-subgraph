import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(6)

    // Add QUICK
    let tokenQUICK = new TokenDefinition(
      Address.fromString('0x831753dd7087cac61ab5644b308642cc1c33dc13'),
      'QUICK',
      'Quickswap',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenQUICK)

    // Add AAVE
    let tokenAAVE = new TokenDefinition(
      Address.fromString('0xd6df932a45c0f255f85145f286ea0b292b21c90b'),
      'AAVE',
      'Aave Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenAAVE)

    // Add UNI
    let tokenUNI = new TokenDefinition(
      Address.fromString('0xb33eaad8d922b1083446dc23f610c2567fb5180f'),
      'UNI',
      'Uniswap',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenUNI)

    // Add LINK
    let tokenLINK = new TokenDefinition(
      Address.fromString('0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39'),
      'LINK',
      'ChainLink Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenLINK)

    // Add TEL
    let tokenTheTEL = new TokenDefinition(
      Address.fromString('0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32'),
      'TEL',
      'Telcoin',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenTheTEL)

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}
