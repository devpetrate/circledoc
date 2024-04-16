---
sidebar_position: 1
---

# Crossfi Testnet Node
Explorer: [explorer.circledao.xyz](https://explorer.circledao.xyz)

API: [crossfi-testnet-api.circledao.xyz](https://crossfi-testnet-api.circledao.xyz)

RPC: [crossfi-testnet-rpc.circledao.xyz](https://crossfi-testnet-rpc.circledao.xyz)


## Install go
```
cd $HOME
VER="1.21.3"
wget "https://golang.org/dl/go$VER.linux-amd64.tar.gz"
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf "go$VER.linux-amd64.tar.gz"
rm "go$VER.linux-amd64.tar.gz"
[ ! -f ~/.bash_profile ] && touch ~/.bash_profile
echo "export PATH=$PATH:/usr/local/go/bin:~/go/bin" >> ~/.bash_profile
source $HOME/.bash_profile
[ ! -d ~/go/bin ] && mkdir -p ~/go/bin
```

## Set vars
```
echo "export WALLET="ENTER WALLET NAME"" >> $HOME/.bash_profile
echo "export MONIKER="ENTER MONIKER"" >> $HOME/.bash_profile
echo "export CROSSFI_CHAIN_ID="crossfi-evm-testnet-1"" >> $HOME/.bash_profile
echo "export CROSSFI_PORT="26"" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

## Download binary
```
cd $HOME
wget https://github.com/crossfichain/crossfi-node/releases/download/v0.3.0-prebuild3/crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz && tar -xf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz
tar -xvf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz
chmod +x $HOME/bin/crossfid
mv $HOME/bin/crossfid $HOME/go/bin
git clone https://github.com/crossfichain/testnet.git
rm -rf crossfi-node_0.3.0-prebuild3_linux_amd64.tar.gz $HOME/bin
```

## Config and install app
```
crossfid config node tcp://localhost:${CROSSFI_PORT}657
crossfid config keyring-backend os
crossfid config chain-id crossfi-evm-testnet-1
rm -rf testnet ~/.mineplex-chain
git clone https://github.com/crossfichain/testnet.git
mv $HOME/testnet/ $HOME/.mineplex-chain/
sed -i '99,114 s/^\( *enable =\).*/\1 "false"/' $HOME/.mineplex-chain/config/config.toml
SEEDS="dd83e3c7c4e783f8a46dbb010ec8853135d29df0@crossfi-testnet-seed.itrocket.net:36656"
PEERS="66bdf53ec0c2ceeefd9a4c29d7f7926e136f114a@crossfi-testnet-peer.itrocket.net:36656,54d39f9900e89427df4cb78c8b4e0dccc36d8485@65.109.68.69:26656,2ce3b5d3ce236afe1fe1f4024c888ea59febac4a@65.108.206.118:60556,bac7399246b676462f01ce7c675d1db9a500a489@37.27.59.71:26056,3bf54dd549c4fc813fc5a3e88980f7ec5a96e327@135.181.221.161:26656,2e6308d166b358b0b57f5dec6e0b8b57430ed898@65.109.30.35:36656,36cdb99f70ce1b25701ef36e4677283604df7f72@135.181.254.119:26656,d2e91f7beb01e0bade12a7bae7c78bfee0ef7ca4@95.217.199.12:26605,4dbf9662be216b57b33a7c78c98f63593d16a3cd@65.108.127.160:46656,881d2f60fdf355890a367acaca27ad647f7f0b8a@65.108.204.107:26656,07d235c3c733271b637fac55747c47bb25ca35be@95.217.159.127:26056,fe74efeb172b700f462a0d81657288208706565d@37.27.13.51:26656,49329ba22c738e0a8ba172e84e187f0f8409e419@95.216.22.44:16656,fbe54f5ef1ef4d2e1c9541b416efb70f305a60f2@37.27.12.181:26656,087e70916b110025e25626c41a1173166be9f2db@65.21.32.216:60856,15d98d28c80bc2fe02ee5be4a7098d401e4f5aab@37.27.35.234:26656,bf6ae47aa4746811d47d495f3ae1987118541343@65.109.93.152:26806,f1e2e6a9e757b047626898b93f759e150347858e@109.199.119.91:26656,19b35c650a17e5120ae4930506e71d975fb7146c@78.47.143.11:26656,8b66ffd88c967f7903145aed74f792721785a04b@185.250.37.122:11656,e5ea7ec43439b6204bce96d7453644829ad84c6c@167.235.65.75:26656,58b683da6bf0dd0eccbead6b8bd893cb2092895e@109.199.117.195:26656,664072ad3414ad4253c127ed21345349dea64c9a@167.235.17.29:26656,2120a4e8c5b44e6a02adb9a8f6bab549e2a68c47@109.123.254.211:26656,27e1c6c211f0ec0e7ca6907f30c201e7b128d694@138.201.31.235:26656,5a7977896986c3dd90bdf5c0b843326866bba789@78.46.99.50:26656,2b2c2ace720dddcfd8f8c0b5a75b31987c960deb@167.235.34.120:26656,dda09f9625cab3fb655c22ef85d756fc77132b9d@167.235.102.45:10956,03cdf2792e994e15e17d8698346f31de570533af@136.243.104.103:23956,c90c4360be9ff903c4c58f4bb5a1e0322640616a@167.235.12.38:14656,c42d7c18326e3d6b5390093ead3c27c954fcd439@162.55.2.58:26656,1c01627ca85575fac10cd4fad921c8bbe9a5bfcc@188.40.66.226:26656,44518f0fa81b889d1a41d5e4cec3c88a97068d10@94.130.35.35:26656,62adff3a93a838d9fa46fad4015cbb2a00ca36ba@148.251.235.130:19656,b7787910d1ad7eaebaad853aa7d5d3a23bdb0dd7@46.4.108.72:26656,55352556de7f26d85ff8b83bb4d6552a2dac8964@37.60.238.186:36656,2842d2ebc3f0e075bfeccf1088dbc97893527227@84.247.162.198:26656,68f34017444b6feb6c00daf2dcdc72bc277b4136@84.46.249.218:26656,b35ba40c2946403d81a247a79296bc83faa1f473@213.199.34.40:26656,057057e6fa1ecc183b6206ea107f66d8d0728059@109.199.118.172:26656,01d2c34725b52d3d0022afd302ca5f5662d33655@185.177.116.79:26656,69ebbb33feb00364aadd6a7d883f98878d499130@149.102.159.76:15656,19c837c2b60e7af1f0d7654829ac29e11453fccd@118.71.153.202:26056,c8914e513463791d91cc9ab35035c0c1111f307f@84.247.183.225:36656,5ebd3b1590d7383c0bb6696ad364934d7f1c984e@160.202.128.199:56156,b3e04f754675ec53919a26ea990918f8f7bd69e5@144.217.68.182:26056,4975453979deeb048e3f5d4ad07959928f3069b8@51.81.185.180:36656,c7cc70eb412dba92d1d711caea90d40cce98fcfc@84.247.147.202:26656,39ab4ec04d314c27bdfffa045a7b1b58806382ea@15.235.144.20:14656,43a274822ff179a87fa454151ce25a675946f967@103.97.111.75:26656,17a62c1f41936d51fd5b20abced4e20c0873daf0@134.209.103.9:26656,c3ac76d1d2dd72006372fa32805b011d36917bda@5.104.80.240:26656,24f414646750bae4afb1190f80140851dc702b65@159.223.194.26:26056,797642220cbad328576a7311cb5941251b2f921f@103.186.33.87:26656,136c50c29240f5f1cdcd95d9833ac10a3a5a32a7@65.109.34.241:26656,718ec979071a37c598b9ed472e48eded9a84facd@65.108.208.100:26656,16a00c5dc938554e8abdf3ec9a622391154034a6@65.108.60.31:26656,5586cbba4c8c5a810d5cde7a1a9b7355fbd372b4@65.109.239.90:26656,a23681c39c099fd0d12b8ced173ed716909a6220@51.89.21.232:26656,c8333d73f10b6cc83a5a10dfa51a374366ebd56d@5.75.131.173:26656,dcdc305bbbfe131074f686977ac46e1ee4fa472d@45.83.106.100:26656,cee875910e8ce0e500f651079ac160b92162aa66@213.199.35.216:26656,024a84ca565ca91c65b1fb44b805cd715c939f83@185.132.178.23:26656,5301b7903d8bf74a183ff3316bb8645f18950da3@37.120.173.44:11456,eb4a59d6878c6fdd46ce20f23c5b080e2e354bd8@213.199.35.26:26656,546568415dc71e95bc6a6238000aea0a9f51652a@213.199.38.233:26656,89da893aafe2a2b19145fd24d6157259fa7ed932@109.199.119.165:26656,257e7d6a442523a272bd0c81d458aa4d866def0e@173.249.18.23:26656,dfdf777685f8b4ef529c371aa1ed9160a810ddf4@213.199.37.254:26656,565fa7a934c083867e9c11fde1b841fa066479d4@35.240.115.172:26656,bc8b05df95c67f23a6f4a012516866e9fdd0ffd6@173.249.35.20:26656,3169e738b0e6eb10b6abf927320d0ad1969d3274@38.242.134.254:26656,660e9306994e8e6690c0f076be45a4439c78fe0d@198.244.215.141:30656,4b6c13b8820fd6c1bcf5e36c3097a1b64e4e3b8c@152.53.18.245:11656,dbab54976717d96c753539e3d5e26e5c5cde9a2b@144.91.87.50:26656,b172fbd2101002bbc401a623f066ec322e3a4800@45.152.243.26:26656,30022f52a1d9a18b0840e74cd2885d3ce0dea278@148.251.3.125:26656,52ec717e8036498831917f5920af822841fcd9a4@213.199.40.21:26656,1e73da0b04fc067147dac665800f39d439c7c2bf@144.91.126.238:11656,a6bd4324b0247ede4fe8c7521f2e9267cb5b7bd2@81.0.220.178:13656,8b7f44a0e04fe817e089839b8a2e69189f024d5d@37.60.246.80:15656"
sed -i -e "s#persistent_peers = .*#persistent_peers = \"$PEERS\"#" -e "s#seeds = .*#seeds = \"$SEEDS\"#" $HOME/.mineplex-chain/config/config.toml
```

## Download genesis and addrbook
```
wget -O $HOME/.mineplex-chain/config/genesis.json https://testnet-files.itrocket.net/crossfi/genesis.json
wget -O $HOME/.mineplex-chain/config/addrbook.json https://testnet-files.itrocket.net/crossfi/addrbook.json
```

## Set seeds and peers
```
SEEDS="dd83e3c7c4e783f8a46dbb010ec8853135d29df0@crossfi-testnet-seed.itrocket.net:36656"
PEERS="66bdf53ec0c2ceeefd9a4c29d7f7926e136f114a@crossfi-testnet-peer.itrocket.net:36656,2e6308d166b358b0b57f5dec6e0b8b57430ed898@65.109.30.35:36656,bbbd8200d83c407d51cfc70bef4c616db1abbaed@65.108.234.158:23656,fe74efeb172b700f462a0d81657288208706565d@37.27.13.51:26656,4dbf9662be216b57b33a7c78c98f63593d16a3cd@65.108.127.160:46656,ab54cbc3676d3b0fad55a50ae0dcef5c42afbeb9@37.60.235.247:26056,b1f6dd2a0fb2f8b08d2d912cd8d66caf910f2c99@135.181.212.139:36656,094a3bc56e83d8a86012207315827a7cdc45d9b2@135.181.176.109:28316,cdc4fd76b359cbfa1eb76febd6c04a0da92158f1@95.217.209.27:26656,087e70916b110025e25626c41a1173166be9f2db@65.21.32.216:60856,02a2e680f0c4a6215e3b172d810624b390ef5efe@65.108.202.217:26656,1da91b392ad7a380fd176e9b3cefd58fd719f7eb@37.27.11.198:26656,8dd34015b54dbd049e8fb45133728dafea4f3419@65.109.232.162:26656,6d14ef26f5455a9d8248f19891fa4be29fd848c6@95.217.35.179:26056,36cdb99f70ce1b25701ef36e4677283604df7f72@135.181.254.119:26656,083726954b2b2190d91bcac3819aefe3fa8cb193@91.218.244.83:21656,0b93f9fd8b8c86f878c6822a441d5628263722ac@162.19.138.14:12656,a23681c39c099fd0d12b8ced173ed716909a6220@51.89.21.232:26656,8b66ffd88c967f7903145aed74f792721785a04b@185.250.37.122:11656,d6ec6a99139b58814a0a6227a7616b9a1ed7aec2@31.169.73.57:26656,3169e738b0e6eb10b6abf927320d0ad1969d3274@38.242.134.254:26656,55352556de7f26d85ff8b83bb4d6552a2dac8964@37.60.238.186:36656,95a04e2fc27ff7e66bbb8591da7323e0e395d28c@80.64.208.223:26656,bc8b05df95c67f23a6f4a012516866e9fdd0ffd6@173.249.35.20:26656,78c7fa5920ac261c03994dd23edf84112055e096@49.13.161.186:26656,7ec8e5dad5ed81b6fd275284386eb651b6e8bc8c@65.109.97.248:26656,27e1c6c211f0ec0e7ca6907f30c201e7b128d694@138.201.31.235:26656,706048f670d2b6db66ea1302e550a911861e3708@94.72.96.223:26056,e1d255b282cd074f41176287fa2d7a126db2dd2f@144.76.62.122:26656,b363ae7542eea55264bcf67906bf0e7118015d11@142.132.152.46:11656,5a7977896986c3dd90bdf5c0b843326866bba789@78.46.99.50:26656,41399c74b2d159e3cb63ee282550b76f1d3c056f@5.9.209.148:26656,b7787910d1ad7eaebaad853aa7d5d3a23bdb0dd7@46.4.108.72:26656,5301b7903d8bf74a183ff3316bb8645f18950da3@37.120.173.44:11456,73746965df645665935ea6c3dcca5dfad7eabca8@109.199.116.240:26656,fcebd9733d536607456acb1df1ab8eb6a6f49d89@109.199.120.89:26656,a662be5f460cff9bf36030461b5a7e6a06085836@109.199.121.188:26656,fdee63744d5a12f74ff3f59a3bbfea9b6681593e@194.163.160.184:26656,d582a555166c6b8f10692557a38b7eab52490e01@167.86.106.86:26656,eb42758cab3b6cf4883dac15c605ff23fcfe2925@37.60.251.62:26656,4b6c13b8820fd6c1bcf5e36c3097a1b64e4e3b8c@152.53.18.245:11656,de91bd51dbef5afbe25fca453b0ae70af604e47c@65.108.1.190:26656,5a406ff355437109be6214e544ecf76e0bf2d93c@161.97.111.6:26656,539bece2cf906a0a3d4fb89f4ca6d7e4ce468954@89.39.13.137:26656,d5ffb8080e338e07e4871707a9e719fcfd4af8b4@165.227.64.199:26656,05a60482feaa3b7246dd0fd9fa1785131fac7175@176.9.53.27:26656,f4ed8ef2392f3d2a432b82bbad2106403314ebda@89.39.13.142:26656,c8333d73f10b6cc83a5a10dfa51a374366ebd56d@5.75.131.173:26656,89752fa7945a06e972d7d860222a5eeaeab5c357@128.140.70.97:26656,352d61156f5cefd81bd2f65206db43b8226b7be3@57.128.63.22:26656,cee875910e8ce0e500f651079ac160b92162aa66@213.199.35.216:26656,49329ba22c738e0a8ba172e84e187f0f8409e419@95.216.22.44:16656,2aafb5304c712f7aa37db9be2869cc84c790d13f@37.27.7.169:26656,a985b30974a127852f11da5646f76550e6e79f88@45.88.223.97:26656,551b0407fc19de1ad69d26738bc59b5eeb678454@88.99.254.62:20656,8fb2e2c59658f4e269aa6685449b1326021dd1a0@167.86.122.72:26656,2916e699b7c588d8826bea1a190c6c82dfe7d5eb@5.188.36.196:26656,2ce3b5d3ce236afe1fe1f4024c888ea59febac4a@65.108.206.118:60556,43a274822ff179a87fa454151ce25a675946f967@103.97.111.75:26656,dfdf777685f8b4ef529c371aa1ed9160a810ddf4@213.199.37.254:26656,b35ba40c2946403d81a247a79296bc83faa1f473@213.199.34.40:26656,d614b9e5021ad530a00085246673c84ad34edaca@84.247.144.31:26656,57757c6e0cfae31ab548e2e31bf27f964fe701e4@128.199.224.200:26656,6b27eb87e7216ea6638abac9a2544ac727490f31@65.108.73.245:32656,546568415dc71e95bc6a6238000aea0a9f51652a@213.199.38.233:26656,8529c3537e3873e1b3f5a9992bb775996b1d198e@46.250.238.106:26656,7e4bd2a380eca22f0b01bb1fdbc37454dedfed75@109.199.108.187:26656,c42d7c18326e3d6b5390093ead3c27c954fcd439@162.55.2.58:26656,4715214d543eb362c11ebd4a14c08d18278ee3af@194.150.220.191:26656,741e4f6997feafbcca4d86eb3bc76900992e79ad@51.81.242.223:26656,b49353a48e2d6db100987f6888b48ac4344568a0@95.217.192.88:26056,b88d969ba0e158da1b4066f5c17af9da68c52c7a@65.109.53.24:44656,5b705811fb0bfb27ea9429b9cff8041df1b3fa71@138.201.201.106:26656,30ce073aff34fec4e3d9dfee8e2a8147f70b788d@84.54.23.111:26656,bc6ee7b89f7193d5b18a859b18f48d3da0b3d09c@109.199.117.167:26656,f298f2b049a5eb07cba0f0e67c3153018e083a2f@149.102.154.95:22656,abd63e0eeb7d86514dbb6731acaf465492308682@65.109.113.233:26056,4fdb9a8014091c97f50524fcdf63740dbe6acb80@[2a03:cfc0:8000:13::b910:277f]:13256,fd425bb6d95b2abdcc74e5b44f3ae6c16a38d0ac@168.119.96.10:26656,ac0d8c08bcb9c726c9809847f28123ba8cc821cb@95.216.228.221:26656,713ded5e29b491868792d0c74106b848d2b5ead8@213.199.36.34:26656"
sed -i -e "s/^seeds *=.*/seeds = \"$SEEDS\"/; s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.mineplex-chain/config/config.toml
```

## Set custom ports in app.toml
```
sed -i.bak -e "s%:1317%:${CROSSFI_PORT}317%g;
s%:8080%:${CROSSFI_PORT}080%g;
s%:9090%:${CROSSFI_PORT}090%g;
s%:9091%:${CROSSFI_PORT}091%g;
s%:8545%:${CROSSFI_PORT}545%g;
s%:8546%:${CROSSFI_PORT}546%g;
s%:6065%:${CROSSFI_PORT}065%g" $HOME/.mineplex-chain/config/app.toml
```

## Set custom ports in config.toml file
```
sed -i.bak -e "s%:26658%:${CROSSFI_PORT}658%g;
s%:26657%:${CROSSFI_PORT}657%g;
s%:6060%:${CROSSFI_PORT}060%g;
s%:26656%:${CROSSFI_PORT}656%g;
s%^external_address = \"\"%external_address = \"$(wget -qO- eth0.me):${CROSSFI_PORT}656\"%;
s%:26660%:${CROSSFI_PORT}660%g" $HOME/.mineplex-chain/config/config.toml
```

## Config pruning
```
sed -i -e "s/^pruning *=.*/pruning = \"custom\"/" $HOME/.mineplex-chain/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"100\"/" $HOME/.mineplex-chain/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"50\"/" $HOME/.mineplex-chain/config/app.toml
```

## Set minimum gas price, enable prometheus and disable indexing
```
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "10000000000000mpx"|g' $HOME/.mineplex-chain/config/app.toml
sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.mineplex-chain/config/config.toml
sed -i -e "s/^indexer *=.*/indexer = \"null\"/" $HOME/.mineplex-chain/config/config.toml
```

## Create service file
```
sudo tee /etc/systemd/system/crossfid.service > /dev/null <<EOF
[Unit]
Description=Crossfi node
After=network-online.target
[Service]
User=$USER
WorkingDirectory=$HOME/.mineplex-chain
ExecStart=$(which crossfid) start --home $HOME/.mineplex-chain
Restart=on-failure
RestartSec=5
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
```

## Reset and download snapshot
```
crossfid tendermint unsafe-reset-all --home $HOME/.mineplex-chain
if curl -s --head curl https://testnet-files.itrocket.net/crossfi/snap_crossfi.tar.lz4 | head -n 1 | grep "200" > /dev/null; then
  curl https://testnet-files.itrocket.net/crossfi/snap_crossfi.tar.lz4 | lz4 -dc - | tar -xf - -C $HOME/.mineplex-chain
    else
  echo no have snap
fi
```

## Enable and start service
```
sudo systemctl daemon-reload
sudo systemctl enable crossfid
sudo systemctl restart crossfid && sudo journalctl -u crossfid -f
```

## Create validator
```
crossfid tx staking create-validator \
--amount ENTER AMOUNT HEREmpx \
--from $WALLET \
--commission-rate 0.1 \
--commission-max-rate 0.2 \
--commission-max-change-rate 0.01 \
--min-self-delegation 1 \
--pubkey $(crossfid tendermint show-validator) \
--moniker "ENTER MONIKER HERE" \
--identity "" \
--details "ENTER DETAILS HERE" \
--chain-id crossfi-evm-testnet-1 \
--gas auto --gas-adjustment 1.5 --gas-prices 10000000000000mpx \
-y
```

## Allow ports
```
sudo ufw default allow outgoing 
sudo ufw default deny incoming 
sudo ufw allow ssh/tcp 
sudo ufw allow ${CROSSFI_PORT}656/tcp
sudo ufw enable
```

## Edit Existing Validator
```
crossfid tx staking edit-validator \
--commission-rate 0.1 \
--new-moniker "ENTER MONIKER HERE" \
--identity "" \
--details "ENTER DETAILS HERE" \
--from $WALLET \
--chain-id crossfi-evm-testnet-1 \
--gas auto --gas-adjustment 1.5 --gas-prices 10000000000000mpx \
-y
```

## Delete the node
```
sudo systemctl stop crossfid
sudo systemctl disable crossfid
sudo rm -rf /etc/systemd/system/crossfid.service
sudo rm $(which crossfid)
sudo rm -rf $HOME/.mineplex-chain
sed -i "/CROSSFI_/d" $HOME/.bash_profile
```