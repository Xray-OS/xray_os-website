# Xray_OS User Guide

## Getting Started

### Desktop Environment
Xray_OS features a custom desktop environment optimized for performance and usability.

#### Desktop Components
- **Panel**: Top panel with system indicators and application launcher
- **Application Menu**: Access all installed applications
- **System Tray**: Network, audio, and system notifications
- **Workspace Switcher**: Multiple virtual desktops

### Essential Applications

#### Pre-installed Software
- **Web Browser**: Firefox with privacy enhancements
- **File Manager**: Thunar file manager
- **Text Editor**: Nano and Vim for terminal, gedit for GUI
- **Terminal**: Zsh shell with oh-my-zsh configuration
- **Media Player**: VLC media player
- **Office Suite**: LibreOffice (optional during installation)

## Package Management

### Using Pacman
Xray_OS uses Pacman package manager from Arch Linux:

```bash
# Update system
sudo pacman -Syu

# Install package
sudo pacman -S package_name

# Remove package
sudo pacman -R package_name

# Search for packages
pacman -Ss search_term

# List installed packages
pacman -Q
```

### AUR Support
Access to Arch User Repository (AUR) for additional software:

```bash
# Install AUR helper (yay)
sudo pacman -S yay

# Install AUR package
yay -S aur_package_name
```

## System Configuration

### Network Management
Configure network connections through the network manager:

```bash
# Connect to WiFi
nmcli device wifi connect "SSID" password "password"

# List available networks
nmcli device wifi list

# Show connection status
nmcli general status
```

### Audio Configuration
Manage audio settings:

```bash
# Control volume
amixer set Master 50%

# List audio devices
aplay -l

# Audio configuration GUI
pavucontrol
```

### Display Settings
Configure display and graphics:

```bash
# Display information
xrandr

# Set resolution
xrandr --output HDMI-1 --mode 1920x1080

# Multiple monitor setup
xrandr --output HDMI-1 --right-of eDP-1
```

## Customization

### Themes and Appearance
- **GTK Themes**: Customize application appearance
- **Icon Themes**: Change system icons
- **Wallpapers**: Set custom desktop backgrounds
- **Fonts**: Install and configure system fonts

### Keyboard Shortcuts
Default keyboard shortcuts:
- `Super + T`: Open terminal
- `Super + F`: Open file manager
- `Super + R`: Application launcher
- `Alt + Tab`: Switch between applications
- `Super + L`: Lock screen

## Development Environment

### Programming Languages
Pre-installed development tools:
- **Python**: Python 3 with pip
- **Node.js**: JavaScript runtime with npm
- **Git**: Version control system
- **GCC**: C/C++ compiler
- **Make**: Build automation tool

### Code Editors
- **Vim**: Terminal-based editor
- **Nano**: Simple terminal editor
- **VS Code**: Install via AUR for GUI development

### Development Packages
```bash
# Install development essentials
sudo pacman -S base-devel

# Install specific language tools
sudo pacman -S python-pip nodejs npm rust go
```

## System Maintenance

### Regular Updates
Keep your system updated:

```bash
# Full system update
sudo pacman -Syu

# Clean package cache
sudo pacman -Sc

# Remove orphaned packages
sudo pacman -Rns $(pacman -Qtdq)
```

### System Monitoring
Monitor system performance:

```bash
# System information
neofetch

# Process monitor
htop

# Disk usage
df -h

# Memory usage
free -h
```

### Backup and Recovery
Important system locations to backup:
- `/home/username/`: User data
- `/etc/`: System configuration
- Package list: `pacman -Qqe > pkglist.txt`

## Security

### Firewall Configuration
```bash
# Enable firewall
sudo systemctl enable ufw
sudo ufw enable

# Allow specific ports
sudo ufw allow 22/tcp  # SSH
sudo ufw allow 80/tcp  # HTTP
```

### User Management
```bash
# Add new user
sudo useradd -m username

# Set password
sudo passwd username

# Add to sudo group
sudo usermod -aG wheel username
```

## Troubleshooting Common Issues

### System Won't Boot
1. Boot from live USB
2. Mount root partition
3. Chroot into system
4. Repair bootloader

### Package Conflicts
```bash
# Force refresh package database
sudo pacman -Syy

# Fix broken packages
sudo pacman -S --overwrite "*" package_name
```

### Performance Issues
- Check running processes with `htop`
- Monitor disk usage with `df -h`
- Clear system logs: `sudo journalctl --vacuum-time=7d`

## Getting Help

### Documentation Resources
- Man pages: `man command_name`
- Arch Wiki: Comprehensive documentation
- Info pages: `info command_name`

### Community Support
- SourceForge project forums
- IRC channels
- Community wiki contributions

---

*For more advanced topics, see the [Configuration Guide](CONFIGURATION.md)*