---
sidebar_position: 1
---

# Welcome to the Circle DAO Nodes and Testnet Tutorial! 

In this comprehensive guide, we'll walk you through the **process of setting up and managing nodes** to support various ecosystem. Whether you're new to node running or a seasoned pro, this tutorial will provide you with the knowledge and tools you need to effectively **run nodes**, **contribute to network security**, and **earn rewards**. Let's dive in!

## Order and configure your VPS
To start installing your node, you'll first need to rent a **VPS** (Virtual Private Server). Using a VPS offers several advantages, including enhanced performance, scalability, and reliability. We'll guide you through renting a VPS at a lower cost and show you how to configure it for the node installation.

Research different VPS providers to find the right fit for your needs, considering factors like pricing, reputation, and customer reviews. Look for plans that offer the appropriate amount of resources (CPU, RAM, storage) to support your node. We recommend **[Contabo](https://contabo.com/en/vps/)** for its affordable pricing, reliable performance, and user-friendly interface.

 - Visit [Contabo.com](https://contabo.com/en/vps/)
 - Choose your preferred VPS (options btw VPS 1 - 6)
 - Choose preferred month
 - In Image section, Choose ubuntu (22.04)
 - Set password in "Login & password for your server" section 
 - Next to next page to make payment

## Connect to your VPS via SSH

 - Download and install most recent edition of PuTTY by visiting the [official website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
 - You will find the IP adress of your VPS in the second email sent to you from Contabo. Launch PuTTY, enter the IP address of your VPS and click “Open”
 - Once the server interface is open, you will be prompted to provide login details; simply enter “root” as the user and use your chosen password
 - Congratulations! You are now successfully logged into your server

## Prepare your server

 - Update server

    ```
    sudo apt-get update -y && sudo apt-get upgrade -y
    ```
 - Install dependencies
    ```
    sudo apt install curl git wget htop tmux build-essential jq make lz4 gcc unzip -y
    ```
 - Install screen

    ``` 
    sudo apt install screen 
    ``` 
 - Install Docker

    ```
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt install docker-ce
    ```
 - Install Rust

    ```
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    source  $HOME/.cargo/env
    rustc --version
    ```
 - Install Go

    ```
    sudo rm -rf /usr/local/go
    curl -L https://go.dev/dl/go1.21.6.linux-amd64.tar.gz | sudo tar -xzf - -C /usr/local
    echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile
    source .bash_profile
    ```

 - Install Git

    ```
    sudo apt install git
    ```

