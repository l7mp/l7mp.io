############################################################
# Based on Debian
############################################################
# docker build -t net-debug . && docker tag net-debug l7mp/net-debug && docker push l7mp/net-debug
############################################################

# Set the base image to Debian testing
FROM debian:testing-slim

# File Author / Maintainer
MAINTAINER The l7mp project: l7mp.io

################## BEGIN INSTALLATION ######################

# Update the repository sources list once more
RUN apt-get update

# Install deb packages
RUN apt-get install -qq -y tcpdump iproute2 procps \
    bridge-utils curl ebtables host iftop netcat socat \
    iperf iproute2 iptables less nano net-tools \
    nmap tcpreplay traceroute wget ethtool && apt-get clean

RUN curl -Lo /websocat.deb https://github.com/vi/websocat/releases/download/v1.4.0/websocat_1.4.0_ssl1.1_amd64.deb && dpkg -i /websocat.deb && rm -f /websocat.deb

##################### INSTALLATION END #####################

CMD exec /bin/bash -c "trap : TERM INT; sleep infinity & wait"
